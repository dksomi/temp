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
  // console.log("소켓 서버 접근");
  // console.log(socket.id);
  // id = socket.id;

  //on 이벤트 등록
  socket.on("send", function(data) {
    console.log(data);

    //이벤트를 보낸 쪽만 실행
    // socket.emit("echo", data);

    // public - 접속한 모든 사람
    io.sockets.emit("echo", data);

    // broardcast - 자신을 제외한 나머지
    // socket.broadcast.emit("echo", data);

    // private - 특정 소켓으로만
    // io.sockets.to(id).emit("echo", data);
  
  });
  

});