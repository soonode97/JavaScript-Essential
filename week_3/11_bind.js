/**
 * bind 메서드
 * 
 * call과 apply처럼 this를 명시적 바인딩하는 메서드이다.
 * 하지만 조금 다른점이 있다면 즉시 호출하지는 않는다.
 * 
 * 1) .bind() 를 하면 주체의 함수를 this 바인딩하여 새로운 함수를 반환한 뒤 
 *    반환한 함수를 어떤 변수가 받으면 저장하고 그 다음 호출하게 된다.
 * 2) bind 함수를 사용하여 만들어진 함수는 name 프로퍼티를 가지고 있다. -> 추적 용이
 */

/**
 * bind 메서드 목적
 * 1) 함수에 this를 '미리' 적용한다.
 * 2) 부분 적용 함수! -> 
 */

// 함수에 this를 미리 적용하는 예시)

var func = function (a,b,c,d) {
    // 1) this가 global인 것 확인
    console.log(this, a, b, c, d);
};
func(1,2,3,4);

console.log('----------------');

// 함수에 this를 미리 적용!
// 바인딩한 함수를 변수에 저장해야하기 때문에 var bincFunc를 선언
var bindFunc1 = func.bind({x: 1});
bindFunc1(5,6,7,8);

console.log('----------------');

// 부분 적용 함수 예시)
// 일부 매개변수를 미리 지정하여 bind 함수가 호출되기 전에 사용한다.
var bindFunc2 = func.bind({x: 1}, 4, 5);
bindFunc2(6,7);


// name 프로퍼티!!
// bind의 수동태인 'bound' 라는 접두어가 붙어있다.
// 때문에 bind 된 함수의 경우 추적이 매우 쉽다.
console.log(func.name);
console.log(bindFunc1.name);
console.log(bindFunc2.name);