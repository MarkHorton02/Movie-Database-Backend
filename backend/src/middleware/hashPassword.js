// Hashing the password to encode it

const bcrypt = require("bcrypt"); // Import bcrypt for password hashing

const hashPassword = async (req, res, next) => {
  try {
    plainTextPassword = req.body.password;
    // Assign the given password the name plainTextPassword

    saltRounds = parseInt(process.env.SALT_ROUNDS);
    // Importing the number of salt rounds from .env, and converting to an integer

    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    // Hash the password according to number of salt rounds

    req.body.password = hashedPassword;
    // Convert password typed into hashed password
    next();
    // Move to next step
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error hashing passwords", error: error });
    // Error message with details
  }
};

module.exports = hashPassword;
// Export at end of file for use in other files