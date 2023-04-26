const event = require("events");
exports.timer = new event();

setInterval(() =>{
    exports.timer.emit('runTime');
},1000);
