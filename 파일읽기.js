//파일 핸드링(처리)
//동기적(순차적)
//비동기적(순서없음)

const fs = require("fs");
let txt;
try{
txt = fs.readFileSync("os.js","utf-8");
console.log(txt);}
catch(e){
    console.log(e)
}
