let http = require("http");
let fs = require("fs");

//이미지 서버
http.createServer(function(req, res) {
  fs.readFile("abc.jpg", function(err, data) {
    if(!err) {
      res.writeHead(200, {"Content-Type": "image/jpeg"});
      res.end(data);
    } else {
      console.log(err);
    }
  });
}).listen(8888, function() {
  console.log("이미지 서버 구동...");
});

//음악 서버
http.createServer(function(req, res) {
  fs.readFile("igo.mp3", function(err, data) {
    if(!err) {
      res.writeHead(200, {"Content-Type": "audio/mpeg"});
      res.end(data);
    } else {
      console.log(err);
    }
  });
}).listen(8889, function() {
  console.log("음악 서버 구동...");
});