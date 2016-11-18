var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var mkdirp = require('mkdirp');

var appRoutes = require('./routes/app');
var apiRoutes = require('./routes/api');
var contestsRoutes = require('./routes/contests');
var loginRoutes = require('./routes/login');
var regRoutes = require('./routes/register');

var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR});

var User = require('./models/user');
var passwordHash = require('password-hash');

var app = express();

mongoose.connect('admin:admin@ds035036.mlab.com:35036/logo-konkursai');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(express.bodyParser({keepExtensions: true}));
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next) {
res.setHeader('Access-Control-Allow-Origin', '*');
//res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

mkdirp('./public/uploads/avatars', function (err) {
  if (err) console.error(err);
  else console.log('Avatars folder created!');
});
mkdirp('./public/uploads/contests', function (err) {
  if (err) console.error(err);
  else console.log('Contests folder created!');
});
mkdirp('./public/uploads/gallery', function (err) {
  if (err) console.error(err);
  else console.log('Gallery folder created!');
});

User.findOne({'nickName': 'Admin'}, function(err, admin) {
  if (!admin) {
    user = new User({
    firstName: 'Irmantas',
    lastName: 'Liepis',
    nickName: 'Admin',
    password: passwordHash.generate('Admin'),
    email: 'info@dizainokonkursai.lt',
    userType: 'Admin',
  });
  user.save(function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log('New Admin:');
      console.log(result);
    }
  });
  }
  console.log('Admin already exists');
});

// var dirAvatar = './public/uploads/avatars';
// var dirContests = './public/uploads/contests';
// var dirGallery = './public/uploads/gallery';
// if (!fs.existsSync(dirAvatar)) {
//   fs.mkdirSync(dirAvatar);
// }
// if (!fs.existsSync(dirContests)) {
//   fs.mkdirSync(dirAvatar);
// }
// if (!fs.existsSync(dirGallery)) {
//   fs.mkdirSync(dirAvatar);
// }

app.use('/prisijungti', loginRoutes); 
app.use('/registracija', regRoutes);
app.use('/konkursai', contestsRoutes);
app.use('/api/v1', apiRoutes);
app.use('/', appRoutes);
app.use('**', function(req,res,next) {res.render('index')});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    //error: {}
    error: err
  });
});


module.exports = app;
