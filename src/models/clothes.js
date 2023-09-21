'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const ClothesModel = (sequelize, DataTypes) =>

  // Define the 'Clothes' model with two columns: 'name' and 'type'
  sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = ClothesModel;
