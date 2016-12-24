var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
  firstName: {type: String, required: true },
  lastName: {type: String, required: true },
  password: {type: String, required: true },
  email: {type: String, required: true}, //, unique: true 
  nickName: {type: String, required: true, unique: true},
  userType: {type: String, required: true},
  contestsWon: [{type: Schema.Types.ObjectId, ref: 'Contests'}],
  designsCreated: {type: Number},
  //publicDesigns: {type: Number}, // implement this?
  contests: [{type: Schema.Types.ObjectId, ref: 'Contests'}],
  messages: [{
    messageId: {type: Number},
    topic: {type: String},
    message: {type: String},
    sender: {type: String},
    recipient: {type: String},
    timeSent: {type: Date, default: Date.now()},
    status: {type: String} //neperziureta, perziureta, issiusta
  }],
  designs: [{
    designUrl: {type: String},
    designIsPublic: {type: Boolean}
  }],
  galleryUrls: [{type: String}],
  winners: [{type: String}],
  avatar: {
    avatarUrl: {type: String}
  },
  profile: {
    profileUrl: {type: String}
  },
  ip: {type: String},
  emailConfirmed: {type: Boolean},
  userBlocked: {type: Boolean, default: false} //TODO implement this
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema);