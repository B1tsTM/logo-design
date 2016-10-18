"use strict";
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

var storageForAvatar = multer.diskStorage({
  fileFilter: function (req, file, cb) { //not working
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  },
  destination: function (req, file, cb) {
    cb(null, './public/uploads/avatars');
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + Date.now() + '.jpg');
      //cb(null, raw.toString('hex') + Date.now());
    });
  }
});

var storageForGallery = multer.diskStorage({
  fileFilter: function (req, file, cb) { //not working
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
  },
  destination: function (req, file, cb) {
    cb(null, './public/uploads/gallery');
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + Date.now() + '.jpg');
      //cb(null, raw.toString('hex') + Date.now());
    });
  }
});

router.get('/avatars/:id', function(req, res, next) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    console.log(user);
    var avatarUrl = user.avatar.avatarUrl;
    res.status(200).json({
      message: 'avataras gautas',
      avatarUrl: avatarUrl
    });
  });
});

router.get('/gallery/:id', function(req, res, next) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    var galleryUrls = user.galleryUrls;
      console.log(galleryUrls);
    res.status(200).json({
      message: 'avataras gautas',
      galleryUrls: galleryUrls
    });
  });
});

//router.post('/avatar', multer({dest: "./uploads/"}).array("uploads[]", 12), function(req,res,next){
router.post('/avatars/:id', multer({storage: storageForAvatar}).array("avatar", 12), function(req,res){
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
var id = req.params.id;
User.findById(id, function(err, user) {
  if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    console.log(user);

    user.avatar.avatarUrl = req.files[0].filename;

    user.save(function(err, result) {
      if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      var fileNames = [];
    for (let i=0; i<req.files.length; i++) {
      fileNames.push(req.files[i].filename);
    }
      res.status(200).json({
        message: 'Avataras išsaugotas',
        obj: result,
        files: req.files,
        filenames: fileNames
      });
    });
  });

});


router.post('/gallery/:id', multer({storage: storageForGallery}).array("gallery", 12), function(req,res){

var id = req.params.id;
//User.findById(id, function(err, user) {
User.findByIdAndUpdate(id, {new: true},  function(err, user) {
  if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    console.log(user);

    var fileNames = [];
    for (let i=0; i<req.files.length; i++) {
      fileNames.push(req.files[i].filename);
    }

    console.log(fileNames);

    User.update({_id: id}, {$push: {galleryUrls: {$each:fileNames}}}, {upsert: true}, function(err) {
      if(err){
          console.log(err);
        }else{
          console.log("Images uploaded !");
        }
    });

  //  for(let i = 0; i< req.files.length; i++) {
       //user.gallery.designUrl.push(req.files[i].filename);
       //user.update({id: id}, {$push: {gallery: req.files[i].filename}});
  //  }
   // user.gallery.designUrl = req.files[0].filename;

    user.save(function(err, result) {
      if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      res.status(200).json({
        message: 'Avataras išsaugotas',
        obj: result,
        files: req.files,
        filenames: fileNames
      });
    });
  });

});

module.exports = router;