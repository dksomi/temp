//exoirts 모듈화
// 절대값 생성함수

//이항 연산자 = 1+1
//단항 연산자 = -1, ++var
exports.abs = function(num){
    let value = Number(num);
    if(lisNaN(value)){
        if(num > 0 ){
            return num;
        }else{
            return -num;
        }

    }
};
exports.MYNAME = 홍길동
