const { response, request } = require("express");
const { User } = require("../models/user.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello from user.controller.Js",
  });
};

module.exports.createUser = (request, response) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = request.body;
  User.create({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  })
    .then((user) => response.json(user))
    .catch((err) => response.json(err));
};

module.exports.getAllUsers = (request, response) => {
  User.find({})
    .then((users) => response.json(users))
    .catch((err) => response.json(err));
};

module.exports.getUser = (request, response) => {
  User.findOne({ _id: request.params.id })
    .thern((user) => response.json(user))
    .catch((err) => response.json(err));
};
