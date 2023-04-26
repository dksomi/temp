const fs = require("fs");

try{
    fs.writeFileSync("temp.txt","Hello World~","utf-8");
}catch(e){
    console.log(e);
}


