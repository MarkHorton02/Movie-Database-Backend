// Set up User endpoints

const { Router } = require("express"); // Importing Router method from the Sequelize library
const userRouter = Router(); // Assign clear name userRouter for easy repeated use

// Importing each of the various controllers
const registerUser = require("../controllers/registerUser");
const listUsers = require("../controllers/listUsers");
const deleteUser = require("../controllers/deleteUser");
const changePassword = require("../controllers/changePassword");
const login = require("../controllers/login");

// Importing the middleware
const checkToken = require("../middleware/checkToken");
const hashPassword = require("../middleware/hashPassword");
const checkPassword = require("../middleware/checkPassword");

// Setting up endpoints and what functions they run
userRouter.post("/users/register", hashPassword, registerUser);
userRouter.get("/users/listUsers", checkToken, listUsers);
userRouter.delete("/users/deleteUser", checkToken, deleteUser);
userRouter.put("/users/changePassword", checkToken, changePassword);
userRouter.post("/users/login", checkPassword, login);

module.exports = userRouter;
// Export at end of file for use in other files