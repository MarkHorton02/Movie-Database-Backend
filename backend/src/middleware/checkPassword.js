// Check the password given against correct password within the database

const User = require("../db/models/userModel"); // Import the model
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

const checkPassword = async (req, res, next) => {
  try {
    const plainTextPassword = req.body.password;
    // Take plain text password as the one typed by user

    const userDetails = await User.findOne({
      where: { username: req.body.username },
    });
    // Compare against the user given

    const hashedPassword = userDetails.password;
    // Take hashed password from database

    const check = await bcrypt.compare(plainTextPassword, hashedPassword);
    // Compare plain text and hashed passwords

    if (check) {
      next();
      // If passwords match, move onto next step
    } else {
      res.status(400).send("Password incorrect");
      // Passwords fail to match error
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Password check error", error: error });
    // Backend error message, not necessarily password being incorrect
  }
};

module.exports = checkPassword;
// Export at end of file for use in other files