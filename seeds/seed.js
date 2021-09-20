const sequelize = require('../config/connection');
const {
  User,
  RelationshipType,
  Beers,
  // Matches,
  // Conversations,
  Pronoun,
  Photo
} = require('../models');

const userData = require('./userData.json');
const beersData = require('./beersData.json');
const photoData = require('./photoData.json');
const pronounData = require('./pronounData.json');
const relationshipTypeData = require('./relationshipTypeData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Pronoun.bulkCreate(pronounData, {
    individualHooks: true,
    returning: true,
  });

  await RelationshipType.bulkCreate(relationshipTypeData, {
    individualHooks: true,
    returning: true,
  });

  await Beers.bulkCreate(beersData, {
    individualHooks: true,
    returning: true,
  });

  await Photo.bulkCreate(photoData, {
    individualHooks: true,
    returning: true,
  });

  

  process.exit(0);
};

seedAll();
