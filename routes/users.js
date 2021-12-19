var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.9jaun.mongodb.net/fasal?retryWrites=true&w=majority',{useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => console.log("Mongoose is connected")).catch(err => console.log(err))
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