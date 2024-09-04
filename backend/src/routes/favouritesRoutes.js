// Set up Favourites endpoints

const { Router } = require("express"); // Importing Router method from the Sequelize library
const favouritesRouter = Router(); // Assign clear name favouritesRouter for easy repeated use

// Importing each of the various controllers
const addFavourite = require("../controllers/addFavourite");
const deleteFavouriteAll = require("../controllers/deleteFavouriteAll");
const deleteFavouriteSingle = require("../controllers/deleteFavouriteSingle");
const findFavourites = require("../controllers/findFavourites");

// Importing the middleware
const checkToken = require("../middleware/checkToken");

// Setting up endpoints and what functions they run
favouritesRouter.post("/favourites/add", checkToken, addFavourite);
favouritesRouter.get("/favourites/listAll", checkToken, findFavourites);
favouritesRouter.delete("/favourites/remove", checkToken, deleteFavouriteSingle);
favouritesRouter.delete("/favourites/remove/all", checkToken, deleteFavouriteAll);

module.exports = favouritesRouter;
// Export at end of file for use in other files