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
      console.log('All contests:');
      console.log(docs);
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
    });
});

router.get('/konkursai/:id', function(req,res,next) {
  var id = req.params.id;
  //Contest.findById(id)
  Contest.findOne({'idName': id})
    //.populate('user', 'firstName')
    .exec(function(err, docs) {
      console.log('/konkursai/:id contest');
      console.log(docs);
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

// router.get('/submitions/contest/:id', function(req,res,next) {
//   var id = req.params.id;
//   Contest.findOne({'idName': id})
//     .exec(function(err, docs) {
//       if (err) {
//       return res.status(404).json({
//         title: 'Klaida !',
//         error: err
//       });
//       }
//       res.status(200).json({
//         message: 'Success',
//         obj: docs
//       });
//     });
// });

router.get('/submitions/contest/:id', function(req, res, next) {
  var id = req.params.id;
  Contest.findOne({'idName': id}, function(err, contest) {
    console.log('contest after findOne');
    console.log(contest);
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    var submitions = contest.submitions;
    console.log('submitions var');
    console.log(submitions);
    res.status(200).json({
      message: 'submitions received',
      submitions: submitions
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

var dynamicStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        var newDestination = 'uploads/' + req.params.id + '/';
        var stat = null;
        try {
            stat = fs.statSync(newDestination);
        } catch (err) {
            fs.mkdirSync(newDestination);
        }
        if (stat && !stat.isDirectory()) {
            throw new Error('Directory cannot be created because an inode of a different type exists at "' + dest + '"');
        }       
        cb(null, newDestination);
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

var storageForSubmitions = multer.diskStorage({
    destination: function (req, file, cb) {
        var newDestination = './public/uploads/contests/' + req.params.contestId + '/';
        var stat = null;
        try {
            stat = fs.statSync(newDestination);
        } catch (err) {
            fs.mkdirSync(newDestination);
        }
        if (stat && !stat.isDirectory()) {
            throw new Error('Directory cannot be created because an inode of a different type exists at "' + dest + '"');
        }       
        cb(null, newDestination);
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

var storageForUserGallery = multer.diskStorage({
    destination: function (req, file, cb) {
        var newDestination = './public/uploads/gallery/' + req.params.userId + '/'; //consider adding + req.params.contestId
        var stat = null;
        try {
            stat = fs.statSync(newDestination);
        } catch (err) {
            fs.mkdirSync(newDestination);
        }
        if (stat && !stat.isDirectory()) {
            throw new Error('Directory cannot be created because a folder already exists');
        }       
        cb(null, newDestination);
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

var dynamicUpload = multer(
    { 
        dest: 'uploads/',
        limits: {
            fieldNameSize: 100,
            fileSize: 60000000
        },
        storage: dynamicStorage
    }
);

var submitionsUpload = multer(
    { 
        dest: 'uploads/',
        limits: {
            fieldNameSize: 100,
            fileSize: 60000000
        },
        storage: storageForSubmitions
    }
);

var submitionsUploadForGallery = multer(
    { 
        dest: 'uploads/',
        limits: {
            fieldNameSize: 100,
            fileSize: 60000000
        },
        storage: storageForUserGallery
    }
);

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
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
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
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    var galleryUrls = user.galleryUrls;
      console.log(galleryUrls);
    res.status(200).json({
      message: 'galerija gauta',
      galleryUrls: galleryUrls
    });
  });
});

//TEST
router.post('/gallery/:id', dynamicUpload.array("gallery", 12), function(req,res){

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
    console.log(req.files);
    for (let i=0; i<req.files.length; i++) {
      fileNames.push(req.files[i].filename);
      //fileNames.push(req.files[i]);
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
//TEST

//Submitions
router.post('/submitions/:contestId/:userId', submitionsUpload.array("submition", 12), function(req,res){

var contestId = req.params.contestId;
var userId = req.params.userId;
//User.findById(id, function(err, user) {
Contest.findOneAndUpdate({'idName': contestId}, {$addToSet: {'participants': userId}}, {new: true},  function(err, contest) {
  if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    console.log(contest);

    var fileNames = [];
    var submitions = [];
    console.log(req.files);
    for (let i=0; i<req.files.length; i++) {
      fileNames.push(req.files[i].filename);
      submitions.push({submitionUrl: req.files[i].filename, submitionAuthor: userId});
      contest.submitions.push({submitionUrl: req.files[i].filename, submitionAuthor: userId});
      //fileNames.push(req.files[i]);
    }
    console.log('submitions array:');
    console.log(submitions);
    //console.log(fileNames);

    //Contest.findOneAndUpdate({'idName': contestId}, {$push: {submitions: {$each:submitions}}});

    

    User.update({_id: userId}, {$push: {galleryUrls: {$each:fileNames}}}, {upsert: true}, function(err) {
      if(err){
        return res.status(404).json({
          title: 'Klaida !',
          error: err
        });
        }else{
          console.log("Images uploaded !");
        }
    });

    //contest.participants.push(userId); //doesn't enforce uniqueness, must use $addtoSet

    contest.save(function(err, result) {
      if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      res.status(200).json({
        message: 'Dizainai įkelti',
        obj: result,
        files: req.files,
        filenames: fileNames,
        submitions: submitions
      });
    });
  });

});
//End of submitions post req

//Submitions
router.post('/submitions/gallery/:contestId/:userId', submitionsUploadForGallery.array("submition", 12), function(req,res){

var contestId = req.params.contestId;
var userId = req.params.userId;
//User.findById(id, function(err, user) {
Contest.findOneAndUpdate({'idName': contestId}, {new: true},  function(err, contest) {
  if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    console.log(contest);

    var fileNames = [];
    console.log(req.files);
    for (let i=0; i<req.files.length; i++) {
      fileNames.push(req.files[i].filename);
      //fileNames.push(req.files[i]);
    }

    console.log(fileNames);


  //  for(let i = 0; i< req.files.length; i++) {
       //user.gallery.designUrl.push(req.files[i].filename);
       //user.update({id: id}, {$push: {gallery: req.files[i].filename}});
  //  }
   // user.gallery.designUrl = req.files[0].filename;

    contest.save(function(err, result) {
      if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      res.status(200).json({
        message: 'Dizainai įkelti',
        obj: result,
        files: req.files,
        filenames: fileNames
      });
    });
  });

});
//End of submitions post req

router.post('/avatars/:id', multer({storage: storageForAvatar}).array("avatar", 12), function(req,res){
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
    console.log(req.files);
    for (let i=0; i<req.files.length; i++) {
      fileNames.push(req.files[i].filename);
      //fileNames.push(req.files[i]);
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