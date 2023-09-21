'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const FoodModel = (sequelize, DataTypes) =>

// Define the 'Food' model with two columns: 'name' and 'type'
  sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = FoodModel;
