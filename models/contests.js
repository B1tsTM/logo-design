var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    required: true
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Contests', schema);