/**
 * 실행 컨텍스트에서 
 * enviromentOuter 를 배울 예정
 * 
 * 1) 스코프
 *  - 식별자에 대한 유효범위 (변수의 범위)
 *  - 대부분 언어에서 존재
 * 
 * 2) 스코프 체인
 *  - 식별자에 대한 유효범위를 안에서 바깥으로 검색해 나가는 행위
 *  - outer는 컨텍스트가 호출되는 당시 LE정보를 가져온다.
 * 
 */

/**
 * 정리:
 * VE에는 record와 outer가 존재하고, outer 안에는 실행 컨텍스트가 
 * 선언될 당시 LE 정보를 가지고 있으니 scope chain에 의해 상위 컨텍스트의 record를 가지고 올 수 있다. 
 * */

var a = 1;
var outer = function() {
	var inner = function() {
		console.log(a); // 이 값은 뭐가 나올지 예상해보세요! 이유는 뭐죠? scope 관점에서!
		var a = 3;
	};
	inner();
	console.log(a); // 이 값은 또 뭐가 나올까요? 이유는요? scope 관점에서!
};
outer();
console.log(a); // 이 값은 뭐가 나올까요? 마찬가지로 이유도!


// 위 내용이 아래처럼 실행 된다.
var a;
a = 1;
outer();
var outer = function() {
    inner();
	var inner = function() {
        var a;
		console.log(a); // undefined
		a = 3;
	};
	console.log(a);     // 1
};
console.log(a);         // 1