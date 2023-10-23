const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUserById = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find((user) => user.id === userId);

  if (!user) {
    throw new HttpError("Could not find user or provided id.", 404);
  }

  res.json({ user: user });
};

const signup = async (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.error(errors.array()); // Log validation errors to the console
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  console.log("ss");

  const { companyName, email, password, role, phoneNumber } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
    console.log(existingUser);
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("User exists already, please login", 422);
    return next(error);
  }

  const createdUser = new User({
    companyName,
    email,
    password,
    role,
    phoneNumber,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1",
    loads: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Sign up failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Logging in failed, please try again", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError("Invalid credentials, couldn't log in", 401);
    return next(error);
  }

  res.json({
    message: "Logged in",
    user: existingUser.toObject({ getters: true }),
  });
};

exports.getUserById = getUserById;
exports.signup = signup;
exports.login = login;
