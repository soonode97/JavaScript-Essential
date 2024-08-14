/**
 * Generator
 * 
 * Iterable 객체를 먼저 이해해야 한다.
 * : 반복될 수 있는, 반복할 수 있는 객체이다.
 * 
 * 1) generator는 iterator 객체가 반환된다.
 * 2) next()라는 메서드를 가지고 있고, 자기가 가지고 있는 요소를 하나하나 순환이 가능하다.
 * 3) yield에서 stop 이후 다시 next 메서드를 호출하여 그 다음까지의 yield를 실행 후 stop
 * 4) 즉, 비동기 작업이 완료되는 시점마다 next 메서드를 호출하면 동기적으로 순차적인 수행이 가능하다는 것이다.
 */

/**
 * Generator 예시
 * 
 * 1) *붙은 함수가 제너레이터 함수이다.
 * 2) next 메서드로 계속 순환한다.
 * 3) yield를 만나면 멈추고 그 뒤에 있는 로직을 수행 => addCoffee();
 * 4) 수행이 완료되면 다시 yield 를 만날때까지 지나간다.
 */

// 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
    setTimeout(function () {
        coffeeMaker.next(prevName ? `${prevName}, ${name}` : name);
    }, 500);
}

// 제너레이터 함수 선언!!
// yield 키워드로 순서를 제어
var coffeGenerator = function* () {
    var espresso = yield addCoffee("", "에스프레소");
    console.log(espresso);
    var mocha = yield addCoffee(espresso, "카페모카");
    console.log(mocha);
    var latte = yield addCoffee(mocha, "카페라떼");
    console.log(latte);
    var americano = yield addCoffee(latte, "아메리카노");
    console.log(americano); 
}

var coffeeMaker = coffeGenerator();
coffeeMaker.next();

// 제너레이터에 yield를 주어서 제어하고 addCoffee에 다시 next 메서드를 넣어 순차적으로 수행할 수 있게 한 것이다.