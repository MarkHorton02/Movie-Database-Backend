// Adding a film to the Favourites list

const Favourites = require("../db/models/favouritesModel"); // Import the model

const addFavourite = async (req, res) => {
  try {
    const newFav = await Favourites.create({
      username: req.body.username,
      movie_id: req.body.movie_id,
    });
    // Adds to Favourites table with above fields (typed by user)

    res.status(200).json({ message: "Successfully added to Favourites" });
    // Successful registration message
  } catch (error) {
    console.log(error);
    res.status(418).json({ message: "Database error", error: error });
    // Error message with information
  }
};

module.exports = addFavourite;
// Export at end of file for use in other files