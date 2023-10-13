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

const getLoadById = (req, res, next) => {
  const loadId = req.params.lid;
  const load = DUMMY_LOADS.find((load) => load.id === loadId);

  if (!load) {
    throw new HttpError("Could not find user or provided id.", 404);
  }

  res.json({ load });
};

const getLoadsByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const loads = DUMMY_LOADS.filter((load) => {
    return load.creator === userId;
  });

  if (!loads || loads.length === 0) {
    return next(
      new HttpError("Could not find a loads for the provided user id.", 404)
    );
  }

  res.json({ loads });
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
    return next(error)
  }

  res.status(201).json({ load: createdLoad });
};

const updateLoad = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Invalid inputs passed, please check your data.", 422);
  }

  const { title, description } = req.body;
  const loadId = req.params.lid;

  const updatedLoad = { ...DUMMY_LOADS.find((load) => load.id === loadId) };
  const loadIndex = DUMMY_LOADS.findIndex((load) => load.id === loadId);
  updatedLoad.title = title;
  updatedLoad.description = description;

  DUMMY_LOADS[loadIndex] = updatedLoad;

  res.status(200).json({ place: updatedLoad });
};

const deleteLoad = (req, res, next) => {
  const loadId = req.params.lid;
  if (!DUMMY_LOADS.find((load) => load.id === loadId)) {
    throw new HttpError("Could not find a load for provided id", 404);
  }

  DUMMY_LOADS = DUMMY_LOADS.filter((load) => load.id !== loadId);
  res.status(200).json({ message: "Deleted load" });
};

exports.getLoadById = getLoadById;
exports.getLoadsByUserId = getLoadsByUserId;
exports.createLoad = createLoad;
exports.updateLoad = updateLoad;
exports.deleteLoad = deleteLoad;
