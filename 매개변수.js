//function add(a , b){
    //return a+b;
//}
일반함수
function 함수명(인자, ...) {}
함수명(인자, ...)

함수 표현식
let 변수명 = function(인자, ...) {}
변수명(인자, ...)

화살표 함수
let  변수명 = (인자, ...) => {}
변수명(인자, ...)

즉시실행 함수
(function(인자, ...) {})();

콜백함수 - 인자로 함수를 사용

let ddd= function(a,b)
{
    return a+b;
};
console.log(add(7,8));
// function add(a, b) { //함수 정의할 때 인수 = parameter, 매개변수
//   return a + b;
// }

//함수 표현식
// let add = function(a, b) {
//   return a + b;
// };

//화살표 함수
// let add = (a, b) => a + b;

//즉시 실행 함수
// (function(a, b) {
//   return a + b;
// })(7, 8);


function add(a, b, func) {
    let c = a + b;
    func(c); //콜백함수
  }
  
  function myFunc(val) {
    console.log(val);
  }
  
  add(7, 8, myFunc);
  
  // console.log(add(7, 8)); //함수의 사용에서 쓰인 인수 = 인자, arguments 


