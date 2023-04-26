const e = require("events");


const my = new e();

my.on('hello',function(){
    console.log(new Date());
});

function timer(){
    my.emit('hello');
    setTimeout(timer,1000);
}

timer();
