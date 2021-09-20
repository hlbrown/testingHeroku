const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for relationshiptype
class RelationshipType extends Model {}

RelationshipType.init(
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
    modelName: 'relationshipTypes'
  }
);

module.exports = RelationshipType;
