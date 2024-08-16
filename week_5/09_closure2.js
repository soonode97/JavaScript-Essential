/**
 * 클로저의 활용 예시
 */

/**
 * 1. 클로저는 상태를 안전하게 변경하고 유지하기위해 사용 (은닉하다)
 */


// 카운트 상태 변경 함수
// 함수가 호출될 떄마다 호출된 횟수를 누적하여 출력하는 카운터함수

let num = 0;

const increase = function () {
    return ++num;
}

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3

// 위처럼 해버리면

// console.log(increase());
// num=100;                     처럼 누군가 변조할 가능성이 있다. (매우 위험)
// console.log(increase());
// console.log(increase());

/**
 * 보완해야 할 사항
 * 
 * 1. 카운트 상태(num  변수의 값)
 * => increase 함수가 호출되기 전까지 변경되면 안된다.
 * 2. 이를 위해서 count 상태는 increase 함수만이 변경 가능해야 한다.
 * 3. 전역변수 num로 선언되어 있기 때문에 어디서든 접근이 가능해서 매우 취약하다.
 * => 그렇다고 increase 함수안에 지역변수로 해도 해결되지는 않는다. => 항상 0으로 초기화 하니까.
 */


/**
 * 보완한 코드
 * 1. increaseGood 함수에서 num을 선언 
 * 2. 값을 증가시키는 _increaseNum 함수를 선언
 * 3. _increaseNum에서 num을 증가
 * 4. _increaseNum을 return => 이 부분이 매우 중요
 * 5. 전역에서 increaseGood() 값을 반환받는 counter 선언
 * 6. 클로저로 인해 counter() 함수 호출 시, increaseGood()의 num이 소멸되지 않고 증가
 */
const increaseGood = function () {
    let num = 0;
    const _increaseNum = function () {
        ++num;
    }
    return _increaseNum;
}

const counter = increaseGood();
counter();
counter();

// 더 짧게 한다면
// const increaseGood = function () {
//     let num = 0;
//     return function () {
//         ++num;
//     };
// }
// 로 해도 된다.