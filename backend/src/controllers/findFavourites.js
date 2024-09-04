// Adding a film to the Favourites list

const Favourites = require("../db/models/favouritesModel"); // Import the model

const findFavourites = async (req, res) => {
  try {
    const listUsersFavourites = await Favourites.findAll({
      where: { username: req.body.username },
    });
    // Find all films that specified user has favourited
    res.status(200).json({
      message: `User ${username} has favourited the following films:`,
      filmslist: listUsersFavourites,
    });
    // Respond with the list
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
    // Error message with information
  }
};

module.exports = findFavourites;
// Export at the end of file for use in other files