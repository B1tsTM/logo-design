var express = require('express');
var router = express.Router();

var Contest = require('../models/contests');

router.post('/', function(req, res, next) {
  console.log(req.body);
  var contest = new Contest({
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

module.exports = router;