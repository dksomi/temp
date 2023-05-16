
let ejs = require("ejs");
let http = require("http");
let fs = require("fs");

let student = [
 
  {name: "홍길동", age: 18},
  {name: "고길동", age: 38},
  {name: "최길동", age: 28},
  {name: "조길동", age: 8},
];

http.createServer(function(request, response) {
  fs.readFile("ejs.html", "utf8" , function(err, data) {
    response.writeHead(200, {"Content-type":"text/html"});
    response.end(ejs.render(data, {student: student}));
  });
}).listen(8888, function() {
  console.log("run at 8888");
});