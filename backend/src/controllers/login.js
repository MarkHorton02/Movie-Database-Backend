// Login page for existing users. Checks

const jwt = require("jsonwebtoken"); // Import JSON Web Token for JWT check

const login = async (req, res) => {
  try {
    const expirationTime = "7 days";
    // How long before the token expires

    const payload = {
      username: req.body.username,
      email: req.body.email,
    };
    // Main bulk of token contents
    const privateKey = process.env.JWT_KEY;
    // Secret passcode taken from .env
    const options = { expiresIn: expirationTime };
    // Other options available, in this case just expiration time

    const token = await jwt.sign(payload, privateKey, options);
    // Generate and verify JWTs

    console.log(token);
    res.status(200).json({ message: "JWT created", token: token });
    // Success message, returns token
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login error", error: error });
    // Error message with information
  }
};

module.exports = login;
// Export at end of file for use in other files