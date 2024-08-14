/**
 * 콜백 함수
 * 
 * 함수가 끝나고 다른 함수의 인자(매개변수)로 넘겨주는 함수
 * 
 * 콜백 함수를 다루게되면 (콜백 지옥)이라는 것을 경험하게 된다.
 * 콜백 지옥을 마주했을 때 대처할 수 있는 방안을 배우면서 동기와 비동기에 대해 자연스럽게 배우게 된다.
 * 추가로, 동기와 비동기 처리를 할 때 우리는 비동기를 동기처럼 보이게 작성할 필요도 있으며 어떤 건지 배우게 된다. 
 */


/**
 * 콜백 함수는 앞에 어떤 함수에 의해 인자를 전달받는다.
 * 때문에, 콜백 함수는 호출의 주체가 있기 마련이다. 예를 들어, setTimeout, forEach 처럼 말이다.
 * 
 * 여기서 제어권이라는 것이 중요하게 작용한다.
 * setTimeout에서 몇초 후 해당 로직이 작동하도록 하는 것은 무엇인가?
 * forEach에서 전달받은 itterable 변수에 있는 요소를 하나하나 순회하도록 하는 로직은 무엇인가?
 * 내가 작성하지 않아도 스스로 돌아가도록 만들어진 것이다.
 * 해당 로직이 돌아가는 제어권은 내가 아닌 해당 함수에 있는 것이다.
 * 
 * 때문에 콜백 함수는 인자를 넘겨줌으로써 제어권도 함께 위임하는 함수이다.
 */


/**
 * 콜백 함수는 무슨 제어권을 받는지?
 * 
 * 1) 호출 시점에 대한 제어권을 갖는다.
 * => setTimeout 말고도 setInterval이 있는데 콜백 함수를 인자로 받아 반복해서 로직을 수행한다.
 * 2) 인자에 대한 제어권을 갖는다.
 */

/**
 * 1번 특징 : 호출 시점에 대한 제어권을 갖는다.
 * 
 * setInterval 예시 및 호출 시점에 대한 제어권을 가지는 예시
 * 1) timer를 지정하고 싶어 var timer 라는 변수를 선언
 * 2) timer가 setInterval을 수행하도록 설정하고
 * 3) timer가 돌아가는 것을 확인하기 위해 count라는 변수를 선언함과 콘솔로그 출력
 * 4) 만약 ++count 처리된 것이 4초를 넘겼으면 clearInterval() 함수를 호출하여 반환
 * 5) timer 값을 구하고 싶었기 때문에 clearInterval() 의 매개변수로 timer를 준다.
 * 6) setInterval() 에 콜백함수로 인자를 넘겨주었기 때문에 호출 시점의 주체가 내가 아닌 setInterval로 간 것
 * 7) 만약, cbFunc(); 처럼 직접 호출한다고 한다면 즉시 호출되면서 timer가 작동하지 않게 된다.
 */

var count = 0;
var cbFunc = function() {
    console.log(count);

    if(++count>4){
        clearInterval(timer);
    }
}
// var timer = setInterval(cbFunc, 300);


/**
 * 2번 특징 : 인자에 대한 제어권을 갖는다.
 * 
 * map 함수 => 배열을 하나하나 순회하며 새로운 배열을 반환해주는 함수
 * 예를 들어, map 함수를 사용한다고 가정해보자.
 * 
 * 1) map() 함수는 기본적으로 하나하나 순회하기 때문에 전달받은 배열의 요소 하나를 생성하고, 추가로 index를 부여한다.
 * 2) 때문에 map() 함수 매개변수에 currentValue, index를 매개변수를 갖는 콜백 함수를 인자로 넣어준다고 하자.
 * 3) currentValue는 당연히 현재 값이 생성될 것이고, index도 현재 값의 index가 생성될 것이다.
 * 4) 그렇다면 서로 순서를 바꾸어주면 어떻게 될까?
 * 
 * 5) 사람이 이해하는 것으로는 currentValue와 index가 달라진다고 생각하겠지만
 * 6) 컴퓨터에서 작동하는 것은 매개변수가 전달되는 위치가 가장 중요하다.
 * 7) 이처럼 map 함수 뿐만 아니라 매개변수가 필요한 다른 함수도 해당 로직에 맞게 사용하기 위해서는
 * 8) 해당 함수의 명세서에 맞게 매개변수 위치에 알맞은 값을 넣어주는 것이 중요하다.
 * 9) 즉, 콜백 함수로 받은 currentValue, index 인자를 제어하는 것은 사용자가 아닌 map 함수가 되는 것이다. 
 */

var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue += 5;
});
console.log(newArr);


