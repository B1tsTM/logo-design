var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Contest = require('../models/contests');


router.get('/konkursai', function(req,res,next) {
  Contest.find()
    .populate('user', 'firstName')
    .exec(function(err, docs) {
      if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
    });
});

router.get('/dizaineriai', function (req,res,next) {
  User.find({'userType': 'designer'})
 // .populate('contests')
  .exec(function(err, docs) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
  });
});

module.exports = router;