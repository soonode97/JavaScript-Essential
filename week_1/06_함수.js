// 함수 = function (기능)
// input과 output을 가진 기능
// 함수를 활용하여 어떠한 기능을 재활용 하는 것이 목적
// function 키워드와 소괄호 중괄호를 익힌다.

// 1. 함수 선언문
function add (/*param*/ x, y) {
    // 함수 내부에서 실행할 로직
    return x+y;
}

console.log(add(2, 3));

// 2. 함수 표현식
let add2 = function (x, y) {
    return x+y;
};

console.log(add2(4, 5));

let functionresult = add2(5, 6);
console.log(functionresult);

// input : 매개변수
// output : return 뒤에 오는 값 : 반환값