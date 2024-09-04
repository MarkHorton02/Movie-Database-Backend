// Establishes the Favourites table's fields (formatting)

const SQLConnection = require("../connection"); //Connect to database
const { DataTypes } = require("sequelize"); // Importing DataTypes method from the Sequelize library

const Favourites = SQLConnection.define("Favourites", {
  // Define the table User with the following fields
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  movie_id: {
    type: DataTypes.BIGINT, // Data type of big integer as this is numeric
    unique: true,
    allowNull: false,
  },
});

module.exports = Favourites;
// Export at end of file for use in other files