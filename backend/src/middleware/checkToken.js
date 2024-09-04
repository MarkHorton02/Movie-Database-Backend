// Confirm JWT

const User = require("../db/models/userModel"); // Import the model
const jwt = require("jsonwebtoken"); // Import JSON Web Token

const checkToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // Formatting of the header of the token

    const privateKey = process.env.JWT_KEY;
    // Secret passcode taken from .env

    const decodedToken = await jwt.verify(token, privateKey);
    // Retrieve the decoded token (user details) through .verify()
    console.log(decodedToken);

    const userEmail = decodedToken.email;
    // Assign the user's email the name userEmail for ease
    const checkUserExists = await User.findOne({ where: { email: userEmail } });
    // Look for a user with that specific email address

    if (!checkUserExists) {
      throw new Error("User not in database");
      // Error message if matching email cannot be found
    } else {
      req.body.email = userEmail;
      next();
      // If matching email found, move to next step
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Token check failed", error: error });
    // Error message with details
  }
};

module.exports = checkToken;
// Export at end of file for use in other files