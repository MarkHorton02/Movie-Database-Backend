// Changing the password of an existing user

const User = require("../db/models/userModel"); // Import the model
const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

const changePassword = async (req, res) => {
  try {
    saltRounds = parseInt(process.env.SALT_ROUNDS);
    // Importing the number of salt rounds from .env, and converting to an integer
    const hashedNewPassword = await bcrypt.hash(
      req.body.newPassword,
      saltRounds
    );
    // Take new password and hash it for the number of salt rounds taken earlier
    console.log(hashedNewPassword);
    // Log the hashed password to console (I think this was just for checking/debugging)

    const result = await User.update(
      { password: hashedNewPassword },
      { where: { email: req.body.username } }
    );
    // Update the record with the new password

    console.log(result);
    res.status(200).json({ message: "Password updated", results: result });
    // Successful user registration message. Returns the user details
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Password failed to update", error: error });
    // Error message with information
  }
};

module.exports = changePassword;
// Export at end of file for use in other files