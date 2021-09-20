const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Beers extends Model {}

Beers.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'beers'
  }

);

module.exports = Beers;
