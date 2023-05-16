let http = require("http");
let fs = requeire("fs");

http.createServer(function(request, response) {
    console.log(request.method);
    if(request.method =="GET"){
        fs.readFile("post.html",function(error,data){
            response.writeHead(200,{"Countent-Type":"text/html"})
        });

    }else if(request.method == "POST"){
        request.on("data",function(data){
            response.writeHead(200,{})
        })
    }
}).listen(8888, function(){
console.log("run...");
});
  