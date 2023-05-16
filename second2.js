let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer(function(request, response) {
  let pathname = url.parse(request.url).pathname;
  switch(pathname) {
    case "/":
    case "/index.html":
      fs.readFile("index.html", function(error, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(data);
      });
      break;
    case "/second":
    case "/second.hyu":
    case "/second.html":
      fs.readFile("second.html", function(error, data) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.end(data);
      });
      break;
    default:
      fs.readFile("notfound.html", function(error, data) {
        response.writeHead(404);
        response.end(data);
      });
  }
}).listen(8888, function() {
  console.log("server running at 8888");
});