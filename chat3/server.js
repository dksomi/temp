let http = require("http"); //웹서버
let fs = require("fs"); //파일 시스템
let socketio = require("socket.io"); // 소켓 프로그램

//웹 서버
let server = http.createServer(function(request, response) {
  //to do
  fs.readFile("chat.html", function(error, data) {
    console.log("웹 서버 접근");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(data);
  });
}).listen(8888, function() {
  console.log("8888포트에서 서버 구동 중...");
});

//소켓
let io = socketio.listen(server);
let id;
io.sockets.on("connection", function(socket) {
  socket.on("send", function(data) {
    io.sockets.emit("echo", data);
  });

  socket.on("setBg", function(data) {
    socket.broadcast.emit("setBg", data);
  });

  socket.on("up", function(data) {
    io.sockets.emit("up", data);
  });
  socket.on("left", function(data) {
    io.sockets.emit("left", data);
  });
});