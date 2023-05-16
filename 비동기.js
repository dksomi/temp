// 파일 처리 비동기
let fs = require("fs");

let data = `
  <html>
    <head>
      <title>INDEX</title>
      <style>
        h1 {
          color: red;
        }
      </style>
    </head>
    <body>
      <h1>HELLO!</h1>
    </body>
  </html>
`;

//쓰기
fs.writeFile("index.html", data, "UTF-8" , function(error) {
  if(!error) {
    //읽기
    fs.readFile("index.html", "UTF-8", function(error, data) {
      if(!error) {
        console.log(data);
      } else {
        console.log(error);
      }
    });
  } else {
    console.log(error);
  }
});