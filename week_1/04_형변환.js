// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환 -> 의도한것과 안한 것의 차이

// 1. 암시적
// 1-1. 문자열
let res1 = 1 + "2";
console.log(res1);
console.log(typeof res1);

let res2 = "1" + true;
console.log(res2);
console.log(typeof res2);

// {}, null, undefined + "1" => 문자열로 변환된다는 것을 암시적으로 알 수 있음

// 1-2. 숫자
let res3 = 1 - "2";
console.log(res3);
console.log(typeof res3);

let res4 = "2" * "3";
console.log(res4);
console.log(typeof res4);

/**
 * 위에 보면 알 수 있듯 + 로 하는 경우 문자열을 우선시 하고, 
 * 그 외 연산은 숫자가 우선시 되어 변환되는 것을 알 수 있다.
 */

// 2. 명시적
// 2-1. Boolean
// 값이 있는 경우 true, 없다면 false, 하지만 객체는 없어도 true
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log("------------------");
console.log(Boolean("false"));
console.log(Boolean({}));

// 2-2. 문자열
let res5 = String(123);
console.log(res5);
console.log(typeof res5);

let res6 = String(true);
console.log(res6);
console.log(typeof res6);

let res7 = String({});
console.log(res7);
console.log(typeof res7);

let res8 = String(null);
console.log(res8);
console.log(typeof res8);

let res9 = String(undefined);
console.log(res9);
console.log(typeof res9);

// 2-3. Number
let res10 = Number("123");
console.log(res10);
console.log(typeof res10);