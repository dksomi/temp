// 파일 처리 비동기
let fs = require("fs");
let exec = require("child_process");

fs.readFile("index.html", "UTF-8", function(error, data) {
  if(!error) {
    //크롬 실행
    exec.execFile("C:/Program Files/Google/Chrome/Application/chrome.exe", ["D:/node2/index.html"], function(error, sout, serror) {});
  } else {
    console.log(error);
  }
});