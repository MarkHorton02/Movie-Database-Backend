// Deleting a user from the database

const User = require("../db/models/userModel"); // Import the model

const deleteUser = async (req, res) => {
  try {
    const result = await User.destroy({
      where: { username: req.body.username },
    });
    // Delete the record that matches the username provided
    console.log(result);
    // Return user details
    res
      .status(200)
      .json({ message: `User ${req.body.username} has been removed` });
    // Success message, specific which user was deleted
  } catch (error) {
    console.log(error);
    res
      .status(418)
      .json({ message: `Failed to delete ${req.body.username}`, error: error });
    // Error message with information
  }
};

module.exports = deleteUser;
// Export at the end of file for use in other files