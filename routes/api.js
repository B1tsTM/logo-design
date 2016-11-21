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
var jwt = require('jsonwebtoken');


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

router.get('/konkursai', function(req,res,next) {
  Contest.find()
    .populate('publisher')
    .sort({endDate : 1})
    .exec(function(err, docs) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
     // console.log('All contests:');
      //console.log(docs);
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
    .populate('publisher')
    .exec(function(err, docs) {
      console.log('/konkursai/:id contest');
      console.log(docs);
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
    });
});

router.get('/dizaineriai', function (req,res,next) {
  User.find({'userType': 'dizaineris'}) 
  .sort({nickName : 1}) // TODO see if this works. Didn't seem to work.. Later should be filtered by contests won
 // .populate('contests')
  .exec(function(err, docs) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
  });
});

router.get('/avatars/:id', function(req, res, next) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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

router.get('/users/:id', function(req,res,next) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    console.log('get /users/:id user var');
    console.log(user);
    res.status(200).json({
      message: 'vartotojas gautas',
      user: user
    });
  });
});

router.get('/gallery/:id', function(req, res, next) {
  var id = req.params.id;
  User.findById(id, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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

router.get('/search/:searchStr', function(req,res,next) {
  var searchStr = req.params.searchStr;
  User.find({nickName: {$regex: new RegExp(searchStr, "i")}})
  .sort({nickName : 1})
  .exec(function(err, users) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Success',
        obj: users
      });
  });
});

router.get('/submitions/contest/:id', function(req, res, next) {
  var id = req.params.id;
  //Contest.findOne({'idName': id}, function(err, contest) {
  Contest.findOne({'idName': id})
  .populate('submitions.submitionAuthor')
  .exec(function(err, contest) {
    //console.log('contest after findOne');
    //console.log(contest);
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    var submitions = [];
    for (let i=0; i<contest.submitions.length; i++) {
      if(contest.submitions[i].status == 'active' || contest.submitions[i].status == 'Nugalėtojas') {
        submitions.push(contest.submitions[i]);
      }
    }
    //var submitions = contest.submitions;
    console.log('submitions var');
    console.log(submitions);
    res.status(200).json({
      message: 'submitions received',
      submitions: submitions
    });
  });
});

router.get('/contest/:contestId/submition/:submitionId/comments', function(req,res,next) {
  var contestId = req.params.contestId;
  var submitionId = req.params.submitionId;
  Contest.findOne({'idName': contestId})
  .populate('submitions.comments.commentAuthor')
  .exec(function(err, contest) {
    if (err) {
       console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    var submition;
    for(let i=0; i<contest.submitions.length; i++) {
      if (contest.submitions[i].submitionId == submitionId) {
        submition = contest.submitions[i];
      }
    }
    res.status(200).json({
      title: 'Success',
      obj: submition.comments
    });
  });
});

router.get('/contest/:id/comments', function(req, res, next) {
   var id = req.params.id;
   Contest.findOne({'idName': id})
   .populate('comments.commentAuthor')
   .exec(function(err, contest){
     console.log('contest/:id/comments GET req contest after findOne');
     console.log(contest);
     if (err) {
       console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    res.status(200).json({
        message: 'Komentarai gauti',
        obj: contest
      });
   });
});

router.get('/messages/:userId', function(req,res,next) {
  var userId = req.params.userId;
  User.findById(userId)
  //.populate('messages.sender')
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    //console.log('user for messages');
    //console.log(user);
    res.status(200).json({
        message: 'Zinutes gautos',
        obj: user
    });
  });
});

router.get('/contest/:contestId/winner', function(req,res,next) {
  var contestId = req.params.contestId;
  Contest.findOne({'idName': contestId})
  //.populate('submitions.submitionAuthor')
  .populate('winnerSubmition.submitionAuthor')
  .populate('winnerSubmition.comments.commentAuthor')
  .exec(function(err, contest) {
    if(err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    if(contest.winnerSubmition) {
      console.log('DEBUG contest');
      console.log(contest);
      var winnerSubmition = contest.winnerSubmition;
      return res.status(201).json({
        message: 'Laimetojo konkursas gautas',
        obj: winnerSubmition
      });
    } else {
      console.log('ELSE');
      return res.status(404).json({
        title: 'Nera nugaletojo',
        error: {message: 'Nera nugaletojo'}
      });
    }
  });
});

// ------------------- END OF GETs --------------------

router.patch('/contest/winner/add/:contestId/:winnerId', function(req, res, next) {
  var contestId = req.params.contestIdName;
  var winnerId = req.params.winnerId;
  Contest.findById(contestId)
  .exec(function(err, contest) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    contest.winner = winnerId;
    contest.save(function (err, result) {
      if (err) {
        console.log(err);
        return res.status(404).json({
          title: 'Klaida !',
          error: {message: 'Įvyko klaida'}
      });
      }
      console.log('Contest winner updated');
    });
  });
  User.findById(winnerId)
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    user.contestsWon.push(contestId);
    user.save(function(err, result) {
      if (err) {
        console.log(err);
        return res.status(404).json({
          title: 'Klaida !',
          error: {message: 'Įvyko klaida'}
      });
      }
      res.status(201).json({
        message: 'Konkurso ir vartotojo informacija laimejus konkursa atnaujinta',
        obj: result
      });
    });
  });
});

router.patch('/message/:userId/:messageId', function(req, res, next) {
  var userId = req.params.userId;
  var messageId = req.params.messageId;
  User.findById(userId, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    for(let i=0; i<user.messages.length; i++) {
      if(user.messages[i].messageId == messageId) {
        if(user.messages[i].status == 'Neperžiūrėta') {
          user.messages[i].status = req.body.status;
        }
      }
    }
    user.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Zinutes statusas pakeistas',
        obj: result
      });
    });
  });
});

router.patch('/message/:recipient', function(req, res, next) {
  // console.log('REQ BODY');
  // console.log(req.body);
  var recipient = req.params.recipient;
  var sender = req.body.sender;
  //console.log(recipient + ", " + sender);
  if(!recipient) {
    return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įveskite gavėjo slapyvardį'}
      });
  }
  User.findOne({'nickName': {$regex: new RegExp(sender, "i")}}, function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    req.body.messageId = user.messages.length + 1;
    req.body.status = 'Išsiųsta';
    user.messages.push(req.body);
    user.save();
    console.log('Message added to senders messages list');
  });
  User.findOne({'nickName': { $regex: new RegExp(recipient, "i") }})
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    if (!user) {
      return res.status(404).json({
        title: 'Blogas gavėjas !',
        error: {message: 'Tokio vartotojo nerasta'}
      });
    }
    //console.log('RECIPIENT');
    //console.log(user);
    req.body.status = 'Neperžiūrėta';
    req.body.messageId = user.messages.length + 1;
    user.messages.push(req.body);
    user.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(201).json({
        message: 'Zinute issiusta',
        obj: result
      });
    });
  });
});

router.patch('/contest/:id', function(req,res,next) {
  var id = req.params.id;
  Contest.findOne({'idName': id})
  .populate('comments.commentAuthor')
  .exec(function(err, contest){
    //console.log('contest/:id PATCH req contest after findOne');
    //console.log(contest);
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    //console.log('/contest/:id req body');
    //console.log(req.body);
    contest.comments.push(req.body);
    //console.log('/contest/:id comments');
    //console.log(contest.comments);
    contest.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Komentaras ikeltas',
        obj: result
      });
    });
  });
});

router.patch('/contest/:contestId/submition/:submitionId/comment', function(req,res,next) {
  var contestId = req.params.contestId;
  var submitionId = req.params.submitionId;
  Contest.findOne({'idName': contestId})
  .populate('comments.commentAuthor')
  .exec(function(err, contest){
    //console.log('contest/:id PATCH req contest after findOne');
    //console.log(contest);
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    //console.log('/contest/:id req body');
    //console.log(req.body);
    for (let i=0; i<contest.submitions.length; i++) {
      if (contest.submitions[i].submitionId == submitionId) {
        contest.submitions[i].comments.push(req.body);
      }
    }

    //contest.comments.push(req.body);
    //console.log('/contest/:id comments');
    //console.log(contest.comments);
    contest.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Submition komentaras ikeltas',
        obj: result
      });
    });
  });
});

router.patch('/submitions/:id', function(req,res,next) {
  var decoded = jwt.decode(req.query.token);
  var id = req.params.id;
  //console.log('req ID');
  //console.log(id)
  Contest.findOne({'idName': id})
  .populate('submitions.submitionAuthor')
  .exec(function(err, contest) {
    //console.log('PATCH req contest after findOne');
    //console.log(contest);
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    var newRating = req.body.submitionRating;
    var subId = req.body.submitionId;
    //console.log('newRating');
    //console.log(newRating);
    //console.log('submition ID');
    //console.log(subId);
    for (let i=0; i<contest.submitions.length; i++) {
      if(contest.submitions[i].submitionId == subId) {
        contest.submitions[i].submitionRating = newRating;
        if (contest.submitions[i].status == 'Nugalėtojas') {
          contest.winnerSubmition = contest.submitions[i];
          contest.winnerSubmition.submitionRating = newRating;
          console.log('RRRRRRRRRRRR ' + contest.winnerSubmition.submitionRating);
          console.log('EEEEEEEEEEee ' + contest.winnerSubmition);
        }
      }
    }

    contest.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Reitingas pakeistas',
        obj: result
      });
    });
  });
});

router.patch('/contest/winner/:contestIdName/:submitionId', function(req,res,next) {
  var contestIdName = req.params.contestIdName;
  var submitionId = req.params.submitionId;
  console.log('REQ BODY ContestId: ' + req.body.contestId);
  console.log('REQ body winnerId: ' + req.body.winnerId);
  User.findById(req.body.winnerId)
  .exec(function(err, user) {
    if(err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    if (!user) {
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Nerasta vartotojo'}
      });
    }
    user.contestsWon.push(req.body.contestId);
    user.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      console.log('Winner profile update');
    });
  });
  Contest.findOne({'idName': contestIdName})
  .exec(function(err, contest) {
    //var winnerSubmition;
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    //contest.winner = req.body.winnerId;
    contest.winnerSubmition = req.body.submition;
    contest.status = 'Užbaigtas';
    for(var i=0; i<contest.submitions.length; i++) {
      if (contest.submitions[i].submitionId == submitionId) {
        //winnerSubmition = contest.submitions[i];
        contest.submitions[i].status = 'Nugalėtojas';
      }
    }
    contest.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Nugalėtojas paskelbtas',
        obj: result
      });
    });
  });
});

// ------------------- END OF GETs --------------------

router.post('/gallery/:id', dynamicUpload.array("gallery", 12), function(req,res){

var id = req.params.id;
//User.findById(id, function(err, user) {
User.findByIdAndUpdate(id, {new: true},  function(err, user) {
  if (err) {
    console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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
          return res.status(404).json({
          title: 'Klaida !',
          error: {message: 'Įvyko klaida'}
      });
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
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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




//Submitions
router.post('/submitions/:contestId/:userId', submitionsUpload.array("submition", 12), function(req,res){

var contestId = req.params.contestId;
var userId = req.params.userId;
//User.findById(id, function(err, user) {
Contest.findOneAndUpdate({'idName': contestId}, {$addToSet: {'participants': userId}}, {new: true},  function(err, contest) {
  if (err) {
    console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    console.log(contest);
    console.log('SUBMITIONS LENGTH');
    console.log(contest.submitions.length);

    //var submitionId = contest.submitions.length + 1;

    var fileNames = [];
    var submitions = [];
    console.log(req.files);
    for (let i=0; i<req.files.length; i++) {
      var submitionId = contest.submitions.length + 1;
      fileNames.push(req.files[i].filename);
      submitions.push({submitionUrl: req.files[i].filename, submitionAuthor: userId, submitionRating: 0, submitionId: submitionId, status: "active"});
      contest.submitions.push({submitionUrl: req.files[i].filename, submitionAuthor: userId, submitionRating: 0, submitionId: submitionId, status: "active"});
      //fileNames.push(req.files[i]);
    }
    //console.log('submitions array:');
    //console.log(submitions);
    //console.log(fileNames);

    //Contest.findOneAndUpdate({'idName': contestId}, {$push: {submitions: {$each:submitions}}});

    

    User.update({_id: userId}, {$push: {galleryUrls: {$each:fileNames}}}, {upsert: true}, function(err) {
      if(err){
        console.log(err);
        return res.status(404).json({
          title: 'Klaida !',
          error: {message: 'Įvyko klaida'}
        });
        }else{
          console.log("Images uploaded !");
        }
    });

    //contest.participants.push(userId); //doesn't enforce uniqueness, must use $addtoSet

    contest.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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
    console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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
    console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
    }
    console.log(user);

    user.avatar.avatarUrl = req.files[0].filename;

    user.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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
    console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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
          return res.status(404).json({
            title: 'Klaida !',
            error: {message: 'Įvyko klaida'}
          });
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
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
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

router.delete('/message/:userId/:messageId', function(req, res, next) {
  var userId = req.params.userId;
  var messageId = req.params.messageId;

  User.findById(userId)
  //.populate('messages.sender')
  .exec(function(err, user) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      for(let i=0; i<user.messages.length; i++) {
      if(user.messages[i].messageId == messageId) {
        //user.messages.splice(i, 1);
        //delete user.messages[i]; //why doesn't this work?
        user.messages[i].status = 'Ištrinta';
        console.log('deleted message with id of ' + i);
      }
    }
    user.save(function(err, result) {
      if (err) {
        console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida'}
      });
      }
      res.status(200).json({
        message: 'Zinute istrinta',
        obj: result
      });
    });
  });
});

module.exports = router;