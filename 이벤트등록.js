process.on("exit",function(code){
    console.log("Bye");
    switch(code){
        case 0:
        console.log("정상종료");
        break;
        case 1:
        console.log("비정상종료");
        break;
    }
   process.removeAllListeners("exit");
});

setTimeout(function(){
process.exit(i);//종료
},5000);

setInterval(function(){
process.emit("exit");
},1000);