//콜백 함수
//비동기
const fs = require("fs");

fs.readFile("OS.js", "utf-8", function(error, data) {
  if(error) { //에러 핸드링
    console.log(error);
    return;
  }
  console.log(data);
});
console.log("End");
