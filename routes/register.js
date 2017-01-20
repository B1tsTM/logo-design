var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var bcrypt = require('bcryptjs');
//var email   = require("emailjs");
var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport")

var User = require('../models/user');

router.post('/', function(req, res, next) {
  User.findOne({'nickName': {$regex: new RegExp(req.body.nickName, "i")}}, function(err, dupe) {
    if(err) {
        console.log(err);
        return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida !'}
      });
      }
      if (dupe) {
        return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Šis slapyvardis užimtas !'}
      });
      }
    });
  var ip = req.headers['X-Forwarded-For'] || req.connection.remoteAddress;
  var user;
  if (req.body.password != req.body.repeatPassword) {
    return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Slaptažodžiai nesutampa !'}
      });
  }
  if (req.body.userType == 'dizaineris') {
  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nickName: req.body.nickName,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email,
    userType: req.body.userType,
    designsCreated: 0,
    //publicDesigns: 0,
    ip: ip,
    emailConfirmed: false,
    dateRegistered: Date.now()
  });
  } else { // client
  user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    nickName: req.body.nickName,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email,
    userType: req.body.userType,
    ip: ip,
    emailConfirmed: false,
    dateRegistered: Date.now()
    });
  };
  user.profile.profileUrl = 'http://localhost:3000/dizaineriai/' + req.body.nickName;




  user.save(function(err, result) {
    if (err) {
      console.log(err);
      return res.status(404).json({
        title: 'Klaida !',
        error: {message: 'Įvyko klaida !'}
      });
      }
      //-------------- Test mailer here
        //send email upon registration
      var transporter = nodemailer.createTransport(smtpTransport({
          host: "smtp.gmail.com",
          secureConnection: false,
          port: 587,
          auth: {
              user: "bitsaz15@gmail.com", // service is detected from the username
              pass: "kwdzgkkpzyvvbgkw"
          }
      }));

      // setup e-mail data with unicode symbols
      var mailOptions = {
          from: 'bitsaz15@gmail.com', // sender address
          to: req.body.email, //'b1ts@hotmail.lt', // list of receivers
          subject: 'Dizaino konkursų el. pašto patvirtinimas', // Subject line
          text: 'Sveikiname užsiregistravus Dizaino Konkursų sistemoje. Patvirtinkite savo el. pašto paskyrą paspaudę šią nuorodą. http://localhost:3000/patvirtinti/' + result._id, // plaintext body
          html: '<b>Sveikiname užsiregistravus Dizaino Konkursų sistemoje. Patvirtinkite savo el. pašto paskyrą paspaudę šią nuorodą. <a>http://localhost:3000/patvirtinti/' + result._id + '</a></b>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
          if(error){
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
      });
      //--------------
      return res.status(201).json({
        message: 'Pavyko prisijungti',
        obj: result
      });
  });
});

module.exports = router;