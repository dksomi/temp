process.on('uncaughtException', function(e) {
    //console.log('에러 발생');
    console.log('안녕하세요.');
  });
  //setInertval - 시간당 반복
  //setTimeout - inertval 처럼 사용
  
  let one = 1000;
  
  function test() { //재귀함수
    console.log('test');
    nothing(); //에러
    setTimeout(test, one);
  }
  // setTimeout(test, one);
  test();