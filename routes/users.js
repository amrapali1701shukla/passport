const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/pass');

const userSchema = mongoose.Schema({
  name:String,
  email:String,
  username:String,
  password:String,
  chats:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:'chat'
  }
]
})

userSchema.plugin(plm);

module.exports= mongoose.model('user',userSchema);