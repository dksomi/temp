const fs = require("fs");

fs.writeFile("temp.txt","안녕하세요","utf-8",function(error){
    if(error){
        console.log(error);
        //return;조기리턴
    }
    console.log("done!");
});