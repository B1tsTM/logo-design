var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function(req, res, next) {

  User.findOne({email: req.body.email}, function(err, doc) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
       if (!doc) {
      return res.status(404).json({
        title: 'Nerasta vartotojo !',
        error: {message: 'Nerasta vartotojo'}
      });
    }
    if (!passwordHash.verify(req.body.password, doc.password)) {
      return res.status(404).json({
        title: 'Negalima prisijungti !',
        error: {message: 'Neteisingas slaptazodis'}
      });
    }
    var token = jwt.sign({user: doc}, 'secret', {expiresIn: 3600});
    res.status(200).json({
      message: 'Prisijungta sekmingai',
      token: token,
      userId: doc._id
    });
  });
});

module.exports = router;