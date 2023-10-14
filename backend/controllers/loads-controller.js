const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error.js");
const getCoordsForAddress = require("../util/location.js");
const Load = require("../models/load.js");
const User = require("../models/user.js");
const { default: mongoose } = require("mongoose");

const getLoadById = async (req, res, next) => {
  const loadId = req.params.lid;
  console.log(loadId);

  let load;
  try {
    load = await Load.findById(loadId);
  } catch (err) {
    const error = new HttpError(
      "Could not find a load, something went wrong",
      500
    );
    return next(error);
  }

  if (!load) {
    const error = new HttpError("Could not find load or provided id.", 404);
    return next(error);
  }

  res.json({ load: load.toObject({ getters: true }) });
};

const getLoadsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let loads;
  try {
    loads = await Load.find({ creator: userId });
  } catch (err) {
    const error = new HttpError(
      "Could not find a load for this user, something went wrong",
      500
    );
    return next(error);
  }

  if (!loads) {
    const error = new HttpError("Could not find load or provided id.", 404);
    return next(error);
  }

  res.json({ loads: loads.map((load) => load.toObject({ getters: true })) });
};

const createLoad = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdLoad = new Load({
    title,
    description,
    address,
    location: coordinates,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
    creator,
  });

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    console.log(err);
    const error = new HttpError("Creating load failed, please try again", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Couldn't find user for provided id", 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdLoad.save({ session: sess });
    user.loads.push(createdLoad);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Creating load failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ load: createdLoad });
};

const updateLoad = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title, description } = req.body;
  const loadId = req.params.lid;

  let load;
  try {
    load = await Load.findById(loadId);
  } catch (err) {
    const error = new HttpError(
      "Couldn't update load, something went wrong",
      500
    );

    return next(error);
  }

  load.title = title;
  load.description = description;

  try {
    await load.save();
  } catch (err) {
    const error = new HttpError(
      "Could not update place something went wrong",
      500
    );
    return next(error);
  }

  res.status(200).json({ load: load.toObject({ getters: true }) });
};

const deleteLoad = async (req, res, next) => {
  const loadId = req.params.lid;

  let load;
  try {
    load = await Load.findById(loadId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Couldn't delete load, something went wrong",
      500
    );
    return next(error);
  }

  if (!load) {
    const error = new HttpError("Could not find load, for this id", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await Load.findByIdAndRemove(loadId, { session: sess });
    load.creator.loads.pull(load);
    await load.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Couldn't delete load, something went wrong",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Deleted load" });
};

exports.getLoadById = getLoadById;
exports.getLoadsByUserId = getLoadsByUserId;
exports.createLoad = createLoad;
exports.updateLoad = updateLoad;
exports.deleteLoad = deleteLoad;
