var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/fasal00');
var userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phone: String,
  Address:{
    type:String,
    default:"Bhopal India"
  },
  dob:String,
  age:Number,
  gender:String,
  list:[{
    type: String,
  }],
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);