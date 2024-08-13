/**
 * 실행컨텍스트 (스코프 변수, 객체, 호이스팅)
 * 
 * : JS 실행컨텍스트는 실행할 코드에 제공할 환경 정보들을 모아놓은 *객체* 이다.
 * 
 * 1) 선언된 변수를 위로 끌어올린다 = 호이스팅(hoisting)
 * 2) 외부 환경 정보를 구성
 * 3) this 값을 바인딩
 * 
 * 4) 실행 컨텍스트는 실행할 코드를 '스택'의 한 종류인 콜스택에 쌓아올린다.
 * 5) 스택으로 쌓이면서 실행될 코드의 환경과 순서가 정해진다.
 * 
 * 가장 중요한 것,
 * 콜스택에 쌓이는 시점이 바로 해당 컨텍스트가 활성화되는 시점이다.
 * 즉, 현재 실행할 코드에 해당 컨텍스트가 관여하게 되는 시점을 의미.
 */


/**
 * 실행 컨텍스트에 담기는 정보
 * 
 * Variable Enviroment
 * Lexical Enviromnet
 * 
 * 1) VE와 LE는 동일하다.
 * 2) VE는 record와 outer를 가지고 있다.
 * 3) record는 식별자, outer는 외부환경정보이다.
 * 4) VE와 LE의 차이점은 변경사항에 따른 적용이다.
 * 5) VE는 컨텍스트가 실행되는 시점에 모습 그대로를 간직한다.
 * 6) VE가 선언되는 시점을 LE의 snapshot 이라고 한다.
 * 7) LE는 컨텍스트가 실행되면서 변경되는 사항이 실시간으로 반영된다.
 * 
 * ThisBinding
 * 
 * 1) This가 Function(함수) 안에서 어떤 기능을 할 지 결정해 주는 역할을 하는 것이다.
 * 2) 실행 컨텍스트 안에 있다.
 * 3) this 식별자가 바라봐야할 객체이다.
 */


/**
 * record & hoisting
 * 
 * record(=enviromentRecord)
 * 
 * 1) record의 수집과정이 hoisting 이다.
 * 2) 현재 컨텍스트와 관련된 식별자 정보들이 수집된다.
 * 3) 수집 대상 : 함수에 지정된 매개변수, 함수 자체, var로 선언된 변수 식별자 등
 * 4) 컨텍스트 처음부터 끝까지 순서대로 훑어가며 수집
 * 5) 수집하는 것이지 실행되는 것은 아니다.
 */

// 호이스팅 전
const consoleX = function(x) { 
    console.log(x);
    var x;
    console.log(x);     // undefined 오류 예상 
    x = 2;
    console.log(x);
    return;
}
consoleX(1);

/**
 * 위 함수 실행 결과를 예상해본다면
 * 1, undefined, 2 라고 생각하겠지만
 * 실제 결과는 1, 1, 2 가 나오게 된다.
 * 
 * 이는 바로 record와 호이스팅으로 인한 것.
 */

// 호이스팅 이후
const consoleX_hoisting = function() {
    // 이렇게 식별자 정보들을 위로 끌어올리게 된다.
    var x;
    var x;
    console.log(x);
    console.log(x);
    x=2;
    console.log(x);
    return;
}

// 예시 2) 호이스팅 전
function a () {
    console.log(b);     // undefined 오류 예상
    var b = 'bbb';
    console.log(b);
    function b() {}
    console.log(b);
}

// 호이스팅 후
function a_hoisting() {
    var b;
    function b() {};
    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
}
a();

/**
 * 하지만 함수의 경우 모두 hoisting이 되는 것은 아니다.
 * 
 * 일단 함수는 함수 선언문과 함수 표현식으로 나누어진다.
 */

// 함수 선언문 예시
function func () {};

// 함수 표현식 예시
let func2 = function () {};


/**
 * 함수 호이스팅에 대한 위험한 예시
 * 
 * 선언문의 경우 함수가 모두 호이스팅되지만, 표현식은 선언한 부분만 호이스팅된다.
 * 
 * 즉, 많은 로직에서 사용되는 A 함수를 선언문으로 할당했다고 하자.
 * 이 함수는 호이스팅으로 인해 맨 위로 올라갈 것이고,
 * 
 * 이후 A 함수보다 아래에 동일한 A함수를 선언문으로 할당하게 된다면
 * A함수의 기능이 이후 A함수로 작성한 로직으로 흘러가게되면서 전체 시스템에 큰 영향을 끼치게 될 것이다.
 * 
 * 
 * 이러한 부분을 방지하기 위해 함수 표현식으로 사용하는 습관을 들여야
 * 개발자가 원하는 순서에 맞춰 함수를 호출하는것이 가능하다는 점을 잊지 말자.
 */