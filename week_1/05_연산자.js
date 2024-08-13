// 1. 연산자 (+, -, *, /, %)

// 1-1. 더하기 연산자 plus
console.log(1+1);

// 1-2. 빼기 연산자 subtraction
console.log(2-1);

// 1-3. 곱하기 연산자 multiply
console.log(2*3);

// 1-4. 나누기 연산자 division
console.log(4/2);

// 1-5. 나머지 연산자 remainder
console.log(5%2);


// 2. 할당 연산자(assignment)
// 2-1. 등호 연산자 (=)
let x = 10; // 10을 x에 할당했다.

// 2-2. 더하기 등호 연산자 (+=)
x += 5;     // 기존 x에 5를 더해준다. => x = x+5; 와 동일 -------> 빼기, 나누기, 곱하기, 나머지 등호 연산자도 동일


// 3. 비교 연산자 => true 또는 false 반환
// 3-1. 일치 연산자(== or ===)
// === -> 타입까지 일치해야 true를 반환하는 연산자
console.log(2 === "2");
console.log(2 == "2");

// 3-2. 불일치 연산자 (!= or !==)
// !== -> 타입까지 달라야 false를 반환하는 연산자
console.log(2 !== "2");
console.log(2 != "2");

// 3-3 크기 연산자(<, <=, >, >=)
// 순서대로 작다, 작거나 같다, 크다, 크거나 같다


// 4. 논리 연산자 (true 와 false를 비교하는 연산자)
// 4-1. 논리곱 연산자 &&, 조건이 모두 true하면 true
console.log(true && true);
console.log(true && false);

// 4-2. 논리 합 연산자 ||, 조건이 하나라도 true하면 true
console.log(true || true);
console.log(true || false);
console.log(false || false);

// 4-3. 논리 부정 연산자 !, 값을 반대로 바꿈
console.log(!true);
let a = true;
console.log(!a);


// 5. 삼항 연산자
// 조건에 따라 값을 선택한다.
// 2 > 3            ?          console.log(true);                   :             console.log(false);
// 2가 3보다 큰가?                맞다면 true 출력                                    아니라면 false 출력
console.log(2>3 ? true : false);


// 6. 타입 연산자
// 해당 값의 데이터 타입을 알려준다.
console.log(typeof "5");