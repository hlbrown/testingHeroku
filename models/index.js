// const Conversations = require('../models/conversations');
// const Matches = require('./matches');
const Pronoun = require('./pronouns');
const RelationshipType = require('./relationshipTypes');
const User = require('./user');
const Beers = require('./beers');
const Photo = require('./photo');


Pronoun.belongsTo(User, {
  foreignKey: 'pronouns_name',
});

RelationshipType.belongsTo(User, {
  foreignKey: 'relationshipType_name',
});

Beers.belongsTo(User, {
 foreignKey: 'beers_name'
});

// User.hasMany(Matches, {
// });

// User.hasMany(Conversations, {
// });

// Photo.belongsTo(User, {
//   foreignKey: 'user_id',
// });

User.belongsToMany(User, {
  through: {
    model: User,
    unique: false,
  },

  as: 'user_id',
});

module.exports = {
  User,
  Pronoun,
  RelationshipType,
  Beers,
  // Matches,
  // Conversations,
  Photo,
};
