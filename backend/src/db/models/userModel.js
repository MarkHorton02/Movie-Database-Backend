// Establishes the User table's fields (formatting)

const SQLConnection = require("../connection"); //Connect to database
const { DataTypes } = require("sequelize"); // Importing DataTypes method from the Sequelize library

const User = SQLConnection.define("User", {
  // Define the table User with the following fields
  user_id: {
    type: DataTypes.BIGINT, // Data type of big integer as this is numeric
    primaryKey: true, // Good practice to have the first field be a primary key (unique ID)
    autoIncrement: true, // Each record in the table automatically given unique user_id
    unique: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING, // After user_id, each field is now a string
    unique: true, // Username and email address forced to be unique
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    unique: false, // Password not unique for security
  },
});

module.exports = User;
// Export at end of file for use in other files