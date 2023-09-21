'use strict';

require('dotenv').config();

// Import necessary modules for database setup
const { Sequelize, DataTypes } = require('sequelize');
const Food = require('./food.js');     // Import the Food model
const Clothes = require('./clothes.js'); // Import the Clothes model

// Define the database connection string, defaulting to an in-memory SQLite database
const SQL_CONNECTION_STRING = process.env.SQL_CONNECTION_STRING || 'sqlite:memory';

// Create a new Sequelize instance to establish a database connection
const sequelize = new Sequelize(SQL_CONNECTION_STRING, { dialect: 'postgres' });

// Export the Sequelize instance and initialized models for use in other parts of the application
module.exports = {
  sequelize,                         
  FoodModel: Food(sequelize, DataTypes),       
  ClothesModel: Clothes(sequelize, DataTypes), 
};
