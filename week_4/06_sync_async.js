/**
 * 콜백함수를 처음 알아갈 때 콜백지옥이라는 것을 배웠다.
 * 매개변수로 함수가 들어가면 그것은 콜백함수라고 하는데 비동기적인 처리를 하다보면
 * 함수안에 콜백함수가 반복되어 유지보수가 힘들어지고, 가독성이 떨어진다.
 * 이러한 것을 볼 때 콜백지옥이라고 표현한다.
 * 
 * 즉, 우리가 이벤트처리 및 서버통신과 같은 비동기적인 처리를 수행할 때 이러한 현상이 발생한다는 것이다.
 */

// 콜백 지옥의 예시
setTimeout(
    function(name) {
        var coffeeList = name;
        console.log(coffeeList);

        setTimeout(
            function(name) {
                coffeeList += ", " + name;
                console.log(coffeeList);

                setTimeout(
                    function(name) {
                        coffeeList += ", " + name;
                        console.log(coffeeList);

                        setTimeout(
                            function(name) {
                                coffeeList += ", " + name;
                                console.log(coffeeList);
                            },
                            500,
                            "에스프레소"
                        )
                    },
                    500,
                    "카페라떼",
                )
            },
            500,
            "카페모카"
        )
    },
    500,
    "아메리카노"
)


/**
 * 동기 vs 비동기
 * 
 * 동기 : synchronous
 * 1) 현재 실행중인 코드가 완료되어야 다음 코드를 실행
 * 2) CPU 계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기
 * 3) 계산이 복잡한 경우도 동기적 코드
 * 
 * 비동기 : asynchronous
 * 1) 현재 실행중인 코드의 완료 여부와 상관없이 즉시 다음 코드로 넘어가는 방식
 * 2) setTimeout, addEventListener 등..
 *    : 별도의 [요청, 실행 대기, 보류] 등과 관련된 코드는 모두 비동기적 코드
 *    : setTimeout은 ms단위로 [실행 대기]를 하며, addEventListener 는 [요청]을 받아야 한다.
 */



// 
/**
 * 기명함수를 활용한 콜백지옥 파훼
 * 
 * 단점) 모두 이름을 지정해주어야 한다는 점이 리소스낭비가 매우 크다.
 */

var coffeeList = "";

var addAmericano = function(name) {
    coffeeList = name;
    console.log(coffeeList);
    setTimeout(addEspresso, 500, "에스프레소");
};

var addEspresso = function(name) {
    coffeeList += ", " + name;
    console.log(coffeeList);
    setTimeout(addMocha,500, "카페모카");
};

var addMocha = function(name) {
    coffeeList += ", " + name;
    console.log(coffeeList);
    setTimeout(addLatte, 500, "카페라떼");
};

var addLatte = function(name) {
    coffeeList += ", " + name;
    console.log(coffeeList);
}

setTimeout(addAmericano, 500, "아메리카노");