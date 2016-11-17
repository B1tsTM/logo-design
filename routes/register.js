var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');

var User = require('../models/user');

router.post('/', function(req, res, next) {
  User.findOne({'nickName': new RegExp(req.body.nickName, "i")}, function(err, dupe) {
    if(err) {
        console.log(err);
        return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida !'}
      });
      }
      if (dupe) {
        return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Šis slapyvardis užimtas !'}
      });
      }
    });
  var user;
  if (req.body.userType == 'dizaineris') {
  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nickName: req.body.nickName,
    password: passwordHash.generate(req.body.password),
    email: req.body.email,
    userType: req.body.userType,
    contestsWon: req.body.contestsWon,
    designsCreated: req.body.designsCreated,
    publicDesigns: req.body.publicDesigns
  });
  } else { // client
  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nickName: req.body.nickName,
    password: passwordHash.generate(req.body.password),
    email: req.body.email,
    userType: req.body.userType
    });
  };
  user.profile.profileUrl = 'http://localhost:3000/users/' + req.body.firstName + req.body.lastName;
  //user.avatar.avatarUrl = 'http://localhost:3000/users/' + req.body.firstName + req.body.lastName + '/avatar';
  user.save(function(err, result) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida !'}
      });
      }
      res.status(201).json({
        message: 'Pavyko prisijungti',
        obj: result
      });
  });
});

module.exports = router;