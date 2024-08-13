// 화살표 함수 (Arrow Function)
// ES6 신 문법

// 기존 함수
function add (x, y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x,y) => {
    return x + y;
};

// 1-2. 한 줄로 가능, 다만 여러 구문이 들어가는 경우는 불가
let arrowFunc02 = (x,y) => x + y;

// 
function testFunc(x) {
    return x;
}

// 위에 함수를 화살표 함수로
// 앞에 매개변수 부분도 하나라면 괄호 없이 사용이 가능하다.
let arrowFunc03 = x => x;

