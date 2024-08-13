/** 데이터 타입
 * runtime : run 하는 time
 * 1) 코드를 작성할 때가 아니라 실제 코드가 실행될 때, 데이터 타입이 결정된다.
 */


/** 숫자 
 * 1) 정수, 실수, 8진수, 16진수
 */

// 1-1. 정수(integer)
let decimal = 6; // 10진수
console.log(decimal);
console.log(typeof(decimal));

// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2);
console.log(typeof(num2));

// 1-3. 지수형(exp)
let num3 = 2.5e5;   // 2.5 * 10^5
console.log(num3);
console.log(typeof(num3));

// 1-4. 스트링 + 숫자
// Nan : Not a Number, 숫자가 아닌 것을 변환하려 할 때 나타나는 것.
let num4 = "Hello" / 2;
console.log(num4);
console.log(typeof(num4));

// 1-5. Infinity(무한대)
let num5 = 1/0;     // +
console.log(num5);
console.log(typeof(num5));  

let num6 = -1/0;    // -
console.log(num6);
console.log(typeof(num6));


/**
 * 문자
 * string(문자열 = 문자의 나열)
 * ' ' = " "
 */
let str1 = "ddd";
console.log(str1);
console.log(typeof(str1));

// 2-1. 문자열 길이 확인
console.log(str1.length);

// 2-2. 문자열 결합하기(concatenation)
let str2 ="sss";
let result = str1+str2;
let result2 = str1.concat(str2);
console.log(result);
console.log(result2);

// 2-3. 문자열 자르기
let str3 = "Hello World";
console.log(str3.substr(0, 5));
console.log(str3.slice(2,5));

// 2-4. 문자열 검색
let str4 = "Hello, World";
console.log(str4.search("World"));

// 2-5. 문자열 대체
let result3 = str4.replace("World", "Javascript");
console.log(result3);

// 2-6. 문자열 분할
let str6 = "apple, banana, grape";
let result4 = str6.split(", ");
console.log(result4);
