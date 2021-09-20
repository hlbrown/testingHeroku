const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for pronoun
class Pronoun extends Model {}

Pronoun.init(
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
    modelName: 'pronouns'
  }

);

module.exports = Pronoun;
