let http = require("http");  
let fs = require("fs"); 
let socketio = require("socket.io"); 

let server = http.createServer(function(require, response){

fs.readFile("chat.html", function(error, data){
    console.log("웹서버접근");
response.writeHead(200, {"content-Type":"text/html"});
response.end(data);
});
}).listen(8888, function(){
console.log("8888포트에서 서버 구동 중 ...");
});


let io =socketio.listen(server);
io.sockets.on("connection", function(socket){
    console.log("소켓 서버 접근");

    socket.on("send",function(data){
console.log(data);
socket.emit("echo",data);


    });
});