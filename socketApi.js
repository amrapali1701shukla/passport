var io = require('socket.io')();
var socketApi = {
    io:io
};

socketApi.io = io;

io.on('connection', function(socket){
    console.log('new user connected');
    socket.on('disconnect', function(val){
        console.log(' a user disconnected'); 
      });
});

// io.on('connection',(msg) => {
//       io.on('Chat message',(msg) => {
//        console.log(msg);
//       })
// })


module.exports = socketApi;