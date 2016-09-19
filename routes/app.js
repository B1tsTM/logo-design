var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get('/', function(req, res, next) {
//   var email = 'e';
//   User.findOne({}, function(err, doc) {
//     if(err) {
//       return res.send('mongo error');
//     }
//     if(doc){
//     email = doc.email;
//     }
//     res.render('node', {email: email});
//   });
 
// });

// router.post('/', function(req, res, next) {
//   var email = req.body.email;
//   var user = new User({
//     firstName: "Admin",
//     lastName: "Damin",
//     password: "secret",
//     email: email
//   });
//   user.save();
//   res.redirect('/');
// });

module.exports = router;
