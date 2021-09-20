const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const beersRoutes = require('./beersRoutes');
// const photoRoutes = require('./photoRoutes');
// const pronounRoutes = require('./pronounRoutes');
// const relationshipTypeRoutes = require('./relationshipTypeRoutes');

router.use('/user', userRoutes);
// router.use('/beers', beersRoutes);
// router.use('/photo', photoRoutes);
// router.use('/pronoun', pronounRoutes);
// router.use('/relationshipType', relationshipTypeRoutes);

module.exports = router;
