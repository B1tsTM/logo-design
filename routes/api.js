var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Contest = require('../models/contests');
var multer = require('multer');
var fs = require('fs');
var app = express();
var DIR = './uploads/';
var upload = multer({dest: DIR});


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

router.post('/avatar', multer({dest: "./uploads/"}).array("uploads[]", 12), function(req,res,next){
//  res.end(JSON.stringify(req.files) + "/n");
// console.log(req.files);
//   var body = JSON.stringify(req.files);
//   return res.json({file: 'test', file2: body});
//   upload(req, res, function (err) {
//     if (err) {
//       return res.end(err.toString());
//     }
//     res.json({file: 'test'});
//     //res.end('File is uploaded');
//   });
res.send(req.files);
});

module.exports = router;