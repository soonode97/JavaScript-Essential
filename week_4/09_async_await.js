/**
 * Promise
 * 이전에 썼던 방법 : then(그러면~)
 * 이번에 쓸 방법 : async(비동기) / await (기다리다)
 */


// coffeeMaker 함수에서 호출할 함수, 'addCoffee'를 선언
// Promise를 반환
var addCoffee = function(name) {
    return new Promise(function(resolve /*, reject*/) {
        setTimeout(function() {
            resolve(name);
        }, 500)
    });
};

// 
var coffeeMaker = async function() {
    var coffeeList = "";
    var _addCoffee = async function(name) {
        coffeeList += (coffeeList ? ", " : "") + (await addCoffee(name));
    };

    // promise를 반환하는 함수인 경우, await를 만나면 무조건 끝날 때까지 기다린다.
    // 언제까지? _addCoffee()가 promise를 반환하기 전까지.
    await _addCoffee("에스프레소");

    // 즉, _addCoffee("에스프레소") 가 수행되는데 300초가 걸렸다면
    // 아래 console.log(coffeeList) 는 300초 뒤에 수행이 된다.
    console.log(coffeeList);
    await _addCoffee("아메리카노");
    console.log(coffeeList);
    await _addCoffee("카페라떼");
    console.log(coffeeList);
    await _addCoffee("카페모카");
    console.log(coffeeList);
};

coffeeMaker();