// Establishing connection to database

const { Sequelize } = require("sequelize");
// Importing Sequelize method from the Sequelize library

const SQLConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {host: process.env.DB_HOST,
  dialect: process.env.DIALECT}
);
// Grabs the URI from .env for the connection, assigns name SQLConnection

try {
  SQLConnection.authenticate();
  // Checks username and password for database access, allows access
  console.log("Successfully connected to database");
  // Console log to make it clear the connection was successful
} catch (error) {
  console.log("Failed to connect to database", error);
  // Console log to make it clear the connection was not successful
}

module.exports = SQLConnection;
// Export at end of file for use in other files