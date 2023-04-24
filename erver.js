const http = require("http");

http.createServer(function(require,response)
{
    response.writeHead(200,{"content-type":"text/html"});
    response.end(`
    <html>
    <head>
    <meta charset ='UTF-8'>
    <style>
    h1{
        color:red;
    }
    </style>
    <script>
    alert('test);
    </script>
     <body><h1>안녕하세요!</h1>
</body>
</html>
   `);
})
.listen(8888,function(){
    console.log("server fun at 8888");

});

