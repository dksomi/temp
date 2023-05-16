let http = require("http");
let url = require("url");

http.createServer(function(request, response){
    let query = url.parse(request,url,turn).query;
    console.log(query);
}).listen(8888, function(){
    console.log("run...");
    });
