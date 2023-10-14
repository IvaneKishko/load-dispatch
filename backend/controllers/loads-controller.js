const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error.js");
const getCoordsForAddress = require("../util/location.js");
const Load = require("../models/load.js");

let DUMMY_LOADS = [
  {
    id: "l1",
    title: "mazda1",
    description: "description 1",
    creator: "u1",
  },
  {
    id: "l2",
    title: "mazda2",
    description: "description 2",
    creator: "u2",
  },
  {
    id: "3",
    title: "mazda3",
    description: "description 3",
    creator: "u1",
  },
];

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

  try {
    await createdLoad.save();
  } catch (err) {
    const error = new HttpError("Creating load failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ load: createdLoad });
};

const updateLoad = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return (new HttpError("Invalid inputs passed, please check your data.", 422));
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
    load = await Load.findById(loadId);
  } catch (err) {
    const error = new HttpError(
      "Couldn't delete load, something went wrong",
      500
    );
    return next(error);
  }

  try {
    await Load.findByIdAndRemove(loadId);
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
