const mongoose = require('mongoose');

const chatSchema = mongoose.Schema([{
   chats:String,
   userId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'users'
   },
   time:{
       type:Date,
       Default:Date.now
   },
}])


module.exports= mongoose.model('chat',chatSchema);