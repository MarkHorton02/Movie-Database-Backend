// Registering a new user (adding new record to User database)

const User = require("../db/models/userModel"); // Import the model

const registerUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    // Create new user with above fields (typed by user)

    res.status(200).json({message: `User ${req.body.username} has been created`});
    // Successful user registration message
  } catch (error) {
    console.log(error);
    res.status(418).json({ message: "Database error", error: error });
    // Error message with information
  }
};

module.exports = registerUser;
// Export at end of file for use in other files