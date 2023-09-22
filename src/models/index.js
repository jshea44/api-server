'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const Food = require('./food.js');
const Clothes = require('./clothes.js');
const Collection = require('./Collection.js');

const SQL_CONNECTION_STRING =
  process.env.SQL_CONNECTION_STRING || 'sqlite:memory';

const sequelize = new Sequelize(SQL_CONNECTION_STRING, { dialect: 'postgres' });

const FoodModel = Food(sequelize, DataTypes);
const ClothesModel = Clothes(sequelize, DataTypes);

FoodModel.belongsTo(ClothesModel, { foreignKey: 'clothesId', targetKey: 'id' });
ClothesModel.hasMany(FoodModel, { foreignKey: 'clothesId', sourceKey: 'id' });

module.exports = {
  sequelize,
  FoodTable: new Collection(FoodModel),
  ClothesTable: new Collection(ClothesModel),
};
