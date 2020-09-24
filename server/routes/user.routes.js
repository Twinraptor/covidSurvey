const UserController = require("../controllers/user.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = function (app) {
  app.get("/api", UserController.index);
  app.post("/api/user", UserController.createUser);
  app.post("/api/user", UserController.login);
  // app.get("/api/users", authenticate, UserController.getAllUsers);
  app.get("/api/user/:id", UserController.getUser);
};
