var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  idName: {
    type: String
  },
  category: {
    type: String
  },
  designer: {     //to be changed instead of user
    type: String
  },
  description: {
    type: String
  },
  designCount: {
    type: Number
  },
  award: {
    type: Number
  },
  daysRemaining: {
    type: Number
  },
  submitionCount: {
    type: Number
  },
  submitions: [{
    submitionUrl: {type: String},
    submitionRating: {type: Number},
    submitionAuthor: {type: Schema.Types.ObjectId, ref: 'User'}
  }],
  startDate: {
    type: Date, default: Date.now()
  },
  endDate: {
    type: Date, default: Date.now()
  },
  status: {       //active or finished
    type: String
  },
  extraInfo: {      //extra info for designers
    type: String  
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique: true
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

schema.post('remove', function(doc) { // schema.pre another option
  var deletedContest = doc;
  User.findById(doc.user, function(err, doc) {
    doc.contests.pull(deletedContest);
    doc.save();
  });
});

module.exports = mongoose.model('Contests', schema);