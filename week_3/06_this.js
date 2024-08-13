/**
 * this
 * 
 * 1) 보통 클래스로 생성한 인스턴스(프로퍼티)를 의미한다.
 * 2) 하지만 JS 에서는 클래스 말고도 어디에서나 사용될 수 있다.
 * 3) 특히, 실행 컨텍스트에서도 this를 사용한다.
 */


/**
 * 실행 컨텍스트에서의 this
 * 
 * 1) this는 실행 컨텍스트가 생성될 때 결정된다. 이 말을 this를 bind 한다 해서 thisbinding 이라고 한다. 
 * 
 */

// 전역
// 런타임
// 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저가 있다.

/**
 * 런타임
 * 1) 코드가 돌아가는 그 환경
 * 2) 노드와 브라우저가 있다.
 * 3) 전역 환경에서 this는 -> 노드(global 객체), 브라우저(window 객체) 이다.
 */

/**
 * 함수와 메서드의 차이점
 * 
 * 함수는 스스로가 호출되고 실행할 수 있다 (독립적)
 * func();
 * 
 * 메서드는 누군가(객체)가 호출하고 실행해야한다. (종속성)
 * object.func();
 * 
 * 이 부분은 this를 결정하는데에 있어 매우 중요하다.
 */

// 호출 주체를 명시할 수 없기 때문에 this 는 전역 환경
var func = function(x) {
    console.log(this, x); // global
}
func(1);

// 호출 주체를 명시할 수 있기 때문에 this 는 해당 객체(obj)
var obj = {
    method: func,
};
obj.method(2);

// 즉, 호출 주체를 기준으로 this를 파악할 수 있다는 점과 구분할 수 있는건 . 과 [] 이다.
// []도 특정 객체에 접근할 때 쓰는 것이기 때문
// 또한 호출의 주체가 없는 함수는 무조건 this가 전역 객체이다.


// 그렇다면 함수 내부의 함수는 어떨까?
var obj1= {
    outer: function () {
        console.log('TEST => ', this);
        var innerFunc = function () {
            console.log('TEST => ', this);
        }
        innerFunc(); // global

        var obj2 = {
            innerMethod: innerFunc,
        };
        obj2.innerMethod(); // obj2
    }
}
obj1.outer();

// 위 예제를 보면 outer() 안에 innerFunc의 경우 호출 주체가 없기 때문에
// global로 출력된 것을 알 수 있듯이 내부 함수도 예외는 없다.