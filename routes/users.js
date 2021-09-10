const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/pass');

const userSchema = mongoose.Schema({
  name:String,
  email:String,
  username:String,
  password:String,
})

userSchema.plugin(plm);

module.exports= mongoose.model('user',userSchema);