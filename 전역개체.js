/*
전역개체 : console , process , exports

*/
let temp =require("D://lib/temp.js");
console.log("Console 객체");
console.dir(console);
console.log("====================");
console.log("Process 객체");
console.dir(process);
console.log("========================");

console/log(temp.setNow());