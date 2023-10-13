const { v4: uuid } = require("uuid");
const { validationResult } = require("express-validator")

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Max Sharwa",
    email: "test@gmail.com",
    name: "Max Sharwa",
    password: "password"
  },
];

const getUserById = (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find((user) => user.id === userId);

  if (!user) {
    throw new HttpError("Could not find user or provided id.", 404);
  }

  res.json({ user: user });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422)
  }

  const { name, email, password } = req.body

  const hasUser = DUMMY_USERS.find(user => user.email === email);
  if (hasUser) {
    throw new HttpError('Email already exists', 422)
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  }

  DUMMY_USERS.push(createdUser);

  res.status(201).json({user: createdUser})
}

const login = (req, res, next) => {
  const { email, password } = req.body

  const identifiedUser = DUMMY_USERS.find(user => user.email === email);
  if(!identifiedUser || identifiedUser.password !== password){
    throw new HttpError('Could not identify user, credentials seems wrong', 401)
  }
  res.json({message: 'Logged in'})
}


exports.getUserById = getUserById
exports.signup = signup
exports.login = login