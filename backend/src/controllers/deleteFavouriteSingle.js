// Adding a film to the Favourites list

const Favourites = require("../db/models/favouritesModel"); // Import the model

const deleteFavouriteSingle = async (req, res) => {
  try {
    const result = await Favourites.destroy({
      where: { username: req.body.username, movie_id: req.body.movie_id },
    });
    // Delete specified film
    console.log(result);
    // Return details
    res.status(200).json({ message: "Successfully removed from Favourites" });
    // Success message, specific which user was deleted
  } catch (error) {
    console.log(error);
    res
      .status(418)
      .json({ message: `Failed to remove ${req.body.movie_id}`, error: error });
    // Error message with information
  }
};

module.exports = deleteFavouriteSingle;
// Export at the end of file for use in other files