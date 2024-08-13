/**
 * 주석
 * JS 엔진이 해석하지 않는 부분
 * 코드에 대한 설명이 첨가된다.
 */

console.log("hello world!");

/** 변수, 상수
 * 1) 메모리에 저장한다.
 * 2) 읽어들여서 재사용한다.
 * 
 * 변수 특징
 * 1) 변수 이름 : 저장된 값의 고유 이름
 * 2) 변수 값 : 변수에 저장된 값
 * 3) 변수 할당 : 변수에 저장하는 행위
 * 4) 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
 * 5) 변수 참조 : 변수에 할당된 값을 읽어오는 행위
 */
var myVar = "Hello Wolrd!!";
console.log(myVar);

/**
 * 변수를 선언할 수 있는 3가지 방법 : var, let, const
 * 
 * 차이점
 * 1) var는 같은 변수 이름으로 재선언이 가능하지만 let, const는 불가능하다.
 * 2) const 는 변수 선언 및 할당 이후에 재할당이 불가능하다.
 */
var myVar2 = "Hello Wolrd!!";
console.log(myVar2);

let myVar3 = "Hello";
console.log(myVar3);

const myVar4 = "HELLO";
console.log(myVar4);