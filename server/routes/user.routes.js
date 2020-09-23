const UserController = require("../controllers/user.controller");
module.exports = function (app) {
  app.get("/api", UserController.index);
  app.post("/api/user", UserController.createUser);
  app.get("/api/users", UserController.getAllUsers);
  app.get("/api/user/:id", UserController.getUser);
};
