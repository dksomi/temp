/*
  %s : 문자열
  %d : 숫자
  %j : json

  console.clear() - 화면 지움
  console.time() - 시간체크 타이머 생성
  console.timeEnd() - 타이머 중지
*/
console.time("timer"); // 시간 측정 시작
console.log("문자: %s", "문자열");
console.log("숫자: %d", 19n);
console.log("JSON: %j", { key: "value" });
console.dir(console);
// console.clear();
let output = 1;
for (let i = 1; i < 100; i++) output *= i;
console.log(output);
console.timeEnd("timer"); //시간 측정 끝

/*
  Process(System.exit(0);)
  Process.exit() : 종료
  process.argvs (배열) : 실행 인자(argument) 설정
  
  console.log(process.argv);
  process.exit(0);

  예제
  node 파일이름 --exit 7000
  [1, 2].forEach
*/
process.argv.forEach(function (item, index) {
  console.log(item);
  if (item === "--exit") {
    setTimeout(function () {
      process.exit(0);
    }, process.argv[index + 1]);
  }
});
