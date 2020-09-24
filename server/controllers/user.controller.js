const { res, req } = require("express");
const { User } = require("../models/user.model");
const jwt = require("jsonwebtoken");

module.exports.index = (req, res) => {
  res.json({
    message: "Hello from user.controller.Js",
  });
};

module.exports.createUser = (req, res) => {
  console.log("made it to controller file");
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  User.create({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  })
    .then((user) =>
      res.json((user) => {
        const payload = { id: user._id };
        const userToken = jwt.sign(payload, process.env.SECRET_KEY);
        res
          .cookie("usertoken", userToken, { httpOnly: true })
          .json({ msg: "success!" });
      })
    )
    .catch((err) => res.json(err));
};

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

module.exports.getUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
};

module.exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (user === null) {
    return res.sendStatus(400);
  }

  const correctPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!correctPassword) {
    return res.sendStatus(400);
  }
  const payload = { id: user._id };
  const userToken = jwt.sign(payload, process.env.SECRET_KEY);
  res
    .cookie("usertoken", userToken, { httpOnly: true })
    .json({ msg: "success!" });
};

module.exports.logout = (req, res) => {
  res.clearCookie("usertoken");
  res.sendStatus(200);
};
