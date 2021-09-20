const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Photo extends Model {}

Photo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    // link: {
    //     type: DataTypes.
    // }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'photo'
  }

);

module.exports = Photo;
