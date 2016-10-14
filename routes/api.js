var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Contest = require('../models/contests');
var multer = require('multer');
var fs = require('fs');
var app = express();
var DIR = './uploads/';
var upload = multer({dest: DIR});
var crypto = require('crypto');
var mime = require('mime');


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

var storage = multer.diskStorage({
  fileFilter: function (req, file, cb) { //not working
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  },
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});

//router.post('/avatar', multer({dest: "./uploads/"}).array("uploads[]", 12), function(req,res,next){
router.post('/avatar', multer({storage: storage}).array("avatar", 12), function(req,res){
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
//res.send(req.files);
var fileNames = [];
for (let i=0; i<req.files.length; i++) {
  fileNames.push(req.files[i].filename);
}

res.json({files: req.files, filenames: fileNames});
});

module.exports = router;