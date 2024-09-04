// Listing all of the users in the database

const User = require("../db/models/userModel"); // Import the model

const listUsers = async (req, res) => {
  try {
    const listOfAllUsers = await User.findAll({});
    // Find all users (not specific)
    res.status(200).json({
      message: "All users in the database:",
      userlist: listOfAllUsers,
    });
    // Respond with the list
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
    // Error message with information
  }
};

module.exports = listUsers;
// Export at the end of file for use in other files