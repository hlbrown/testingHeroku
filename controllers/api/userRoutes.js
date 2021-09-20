const router = require('express').Router();
const { User } = require('../../models');

router.post('/signup', async (req, res) => {

   try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      age: req.body.age,
      city: req.body.city,
      preferred_pronoun: req.body.preferred_pronoun,
      hobbies: req.body.hobbies,
      dating_or_friendship: req.body.dating_or_friendship,
      interested_in: req.body.interested_in,
      beers_name: req.body.beers_name,
      willing_to_grab_a_pint: req.body.willing_to_grab_a_pint,
      matched: req.body.matched,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.user = dbUserData;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  
// try {
//  const userData = await User.create(req.body);
//  req.session.save(() => {
//    req.session.user_id = userData.id;
//    req.session.logged_in = true;
//   res.status(200).json(userData);
//    });
//  } catch (err) {
//     res.status(400).json(err);
//   }
});

//router.post('/signup', async (req, res) => {
//    User.create(req.body)
//    .then(( user ) => {
//      if(req.body.user_id.length){
//    const userIdArr = req.body.user_id.map((id) => {
//      return {
//        user_id: id,
//      };
//    });
//    return User.bulkCreate(userIdArr);
//  }
//  res.status(200).json(user);
//})
//  .then((user_id) => res.status(200).json(user_id))
//  .catch((err) => {
//    console.log(err);
//    res.status(400).json(err);
//  });
//
//})
router.post('/login', async (req, res) => {
  // try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.user = userData;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  // } catch (err) {
  //   res.status(400).json(err);
  // }
});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
