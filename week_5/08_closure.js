/**
 * 클로저
 * 
 * 함수와 함수가 선언된 렉시컬 환경과의 조합..?
 */


// [이전에 배웠던 스코프 체인을 복습]

// 1. 전역 스코프로 x=1 선언
const x = 1;
function outerFunc() {

    // 3. outerFunc 객체 스코프로 x=10 선언
    const x = 10;

    // 5. 4번의 innerFunc()로 인해 호출됨
    function innerFunc() {
        // 6. 여기 x는 어디를 가리키는가?
        // 스코프체인은 안에서 바깥쪽으로 식별자를 검색하는 것이니
        // 여기 x 식별자가 제일 가까운 것은 x=10; 이다. 
        // 즉, innerFunc()가 실행될 때의 환경은 outerFunc() 함수가 실행될 때이며 outer 환경 정보는 outerFunc에서 참조한다.
        // 그로 인해 10이 출력된다.
        console.log(x);
    }

    // 4. 여기서 innerFunc 객체를 콜스택에 쌓음
    innerFunc();
}
// 2. outerFunc 객체를 콜스택에 쌓음
outerFunc();


// [렉시컬 스코프]
// JS 엔진은 함수를 어디서 '호출' 했는지가 아니라
// 어디에 '정의' 했는지에 따라서 스코프(상위 스코프)를 결정한다.

const y = 2;
// 1. outerFunc()에서 innerFunc()를 '호출'하고 있음에도
function outerFunc2() {
    const y = 10;
    innerFunc2();
}

// 2. innerFunc()에서는 전역스코프인 2를 출력하고 있다는 것
// 3. 이렇게 호출을 함수안에서 했다고 스코프가 호출된 함수로 향하는 것이 아니라,
// 4. 어디에 정의되었는지 (outerFunc는 지금 전역에 정의) 에 따라 스코프가 결정된다는 것이다.
function innerFunc2() {
    console.log(y);
}

outerFunc2(); // 1


/**
 * 그래서 클로저는 무엇인가?
 * 
 * 외부 함수보다 중첩 함수가 오래 유지되는 경우 중첩함수에서 종료가 되어도 여전히 유지되는 속성을 뜻한다.
 */

const z=1;

function outerFunc3() {
    const z = 10;
    const inner = function() {
        console.log(z);
    }
    return inner;
}

// 1. innerFunc3에 outerFunc3의 결과를 담는다.
const innerFunc3 = outerFunc3();

// 2. 저장된 innerFunc3을 호출한다. => 여전히 10이 출력된다.
innerFunc3();

/**
 * 위에 상황을 정리하면 callstack은 -> (71줄) 전역context -> (72줄) 전역context | outerFunc3 -> (73줄) 전역context
 * 처럼 outerFunc3가 호출되고 innerFunc3에 return 값을 할당해주면 outerFunc3는 콜스택에서 사라지게된다.
 * 
 * 그리고 (75줄) 전역context | innerFunc3() 이 호출되는데 이 innerFunc3은 outerFunc3 객체의 inner 라는 객체 아닌가???
 * 즉, 현재 콜스택은 전역context | innerFunc3() | inner 가 되는 것이다.
 * 
 * 여기서 inner의 스코프는 어디를 바라보는가?
 * 분명 outerFunc3은 콜스택에서 종료되어 사라졌다. 가장 가까운 실행 컨텍스트는 innerFunc3이고 innerFunc3은 전역 객체로 선언되어 있다.
 * 그럼에도 z는 전역 변수인 1이 아니라 outerFunc() 변수인 10을 참조하고 있다 것이다.
 * 
 * 
 * 이러한 이유는 위에서 정리했듯이 
 * 1. 외부 함수인 outer 보다 중첩 함수인 inner가 innerFunc3으로 저장되어 있고,
 * 2. 중첩함수 inner를 return 해주며, 
 * 3. (75줄) innerFunc3()으로 외부에서 또 호출이 되기 때문에 
 * 4. 소멸하지 않고 유지되는 것이다.
 * 
 * 이것이 바로 클로저의 기능이다.
 */