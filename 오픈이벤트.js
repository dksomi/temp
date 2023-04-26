const fs =require("fs");

try{
    rs = fs.ReadStream("./OS,js");
} catch(e){
    console.log(e)
}

rs.on('open',function(){
    console.log('OS.js open');
});