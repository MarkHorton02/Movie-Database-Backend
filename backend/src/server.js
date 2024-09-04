// Base file for the server. The file ran by node in the console

// Importing all of the required functions and libraries
require("dotenv").config(); // Imports and runs .env
const express = require("express"); // Imports Express
const app = express(); // Assigns name of "app"
app.use(express.json()); // API allowing for communication to database


const User = require("./db/models/userModel"); // Import the User model
const Favourites = require("./db/models/favouritesModel"); // Import the Favourites model
const userRouter = require("./routes/userRoutes"); // Import the User router
const favouritesRouter = require("./routes/favouritesRoutes"); // Import the Favourites router
const cors = require("cors"); // Import cors
app.use(cors());

const port = process.env.PORT || 5002;
// Import the port number from .env, if fails then 5002

app.get("/health", (req, res) => res.status(200).send("API is healthy"));
// Server health check

app.use(userRouter);
// Telling Express to use the  User router

app.use(favouritesRouter);

app.listen(port, () => {
  User.sync({ alter: true });
  // Use the user table provided and allow editing instead of making a separate/deleting existing table
  Favourites.sync({ alter: true });
  console.log(`Server is listening on port ${port}`);
  // Console log to make clear that connection was successful
});
// Listen (connect) to server