/**
 * undefined 와 null
 * 
 * undefined의 경우 개발자가 직접 명시(할당)하는 경우는 거의 없다.
 * 보통 값이 없음을 표현할때 null을 할당하기 때문이다.
 */


/**
 * undefined
 * 그럼 undefined는 언제 출력되는가?
 * 
 * 1) 변수에 값이 저장되지 않은 경우 => 데이터 영역의 메모리주소가 없는 식별자인 경우
 * 2) .이나 []로 접근하려 할 떄 데이터가 없는 경우
 * 3) 함수에서 return 문이 없거나 호출되지 않는 함수의 실행인 경우
 */

var a;
console.log(a);

var obj = { a: 1};
console.log(obj.a);
console.log(obj.b);

var func = function() {};
var c=func();
console.log(c);


/**
 * null
 * 
 * '없다'를 명시적으로 표현할 때 쓰임
 * typeof null 하면 object가 나오는데 js 자체 버그이다. (조심)
 */

var n = null;
console.log(n);

//동등연산자 (equality operator)
console.log(n == undefined);    // true
console.log(n == null);         // true

//일치연산자 (identity operator)
console.log(n === undefined);   // false 
console.log(n === null);        // true