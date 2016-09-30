var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Contest = require('../models/contests');

router.get('/', function(req,res,next) {
  Contest.find()
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

router.use('/', function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida prisijungiant',
        error: err
      });
    }
    next();
  });
});


router.post('/', function(req, res, next) {
  console.log(req.body);
  var contest = new Contest({
    contestId: req.body.contestId,
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    award: req.body.award,
    designer: req.body.designer
  });
  contest.save(function(err, result) {
    if (err) {
      return res.status(404).json({
        title: 'Klaida !',
        error: err
      });
    }
    res.status(201).json({
      contest: 'Konkursas įkeltas',
      obj: result
    });
  });
});

router.patch('/:id', function(req,res,next) {
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