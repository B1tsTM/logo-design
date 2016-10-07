var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Contest = require('../models/contests');
var User = require('../models/user');

router.get('/', function (req,res,next) {
  res.render('index');
});

router.use('/', function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if (err) {
      return res.status(401).json({
        title: 'Klaida prisijungiant',
        error: err
      });
    }
    next();
  });
});


router.post('/', function(req, res, next) {
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, doc) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    console.log(req.body);
    var contest = new Contest({
    contestId: req.body.contestId,
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    award: req.body.award,
    status: req.body.status,
    submitions: req.body.submitions,
    daysRemaining: req.body.daysRemaining,
    designer: req.body.designer,
    user: doc
  });
  contest.save(function(err, result) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    doc.contests.push(result);
    doc.save();
    res.status(201).json({
      contest: 'Konkursas įkeltas',
      obj: result
    });
  });
  });
});

router.patch('/:id', function(req,res,next) {
    var decoded = jwt.decode(req.query.token);
  Contest.findById(req.params.id, function(err, doc) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    if (!doc) {
      return res.status(404).json({
        title: 'Nerasta konkurso !',
        error: {message: 'Nerasta konkurso'}
      });
    }
    if (doc.user != decoded.user._id) {
      return res.status(401).json({
        title: 'Neturite privilegiju !',
        error: {message: 'Negalima pakeisti konkurso'}
      });
    }

    doc.name = req.body.name;
    doc.category = req.body.category;
    doc.description = req.body.description;
    doc.award = req.body.award;
    doc.save(function(err, result) {
      if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      res.status(200).json({
        message: 'Išsaugota',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req,res,next) {
  var decoded = jwt.decode(req.query.token);
  Contest.findById(req.params.id, function(err, doc) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    if (!doc) {
      return res.status(404).json({
        title: 'Nerasta konkurso !',
        error: {message: 'Nerasta konkurso'}
      });
    }
    if (doc.user != decoded.user._id) {
      return res.status(401).json({
        title: 'Neturite privilegiju !',
        error: {message: 'Negalima pakeisti konkurso'}
      });
    }

    doc.remove(function(err, result) {
      if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
      }
      res.status(200).json({
        message: 'Ištrinta',
        obj: result
      });
    });
  });
});

module.exports = router;