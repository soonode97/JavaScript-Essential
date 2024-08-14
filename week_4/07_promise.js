/**
 * 비동기와 동기를 배우며 각 특징을 알아보았는데
 * 
 * 이벤트작업이나 서버통신 처리를 할 때 비동기적인 처리방식이 사용된다고 했다.
 * 
 * 하지만 우리가 특정 로직을 설계할 때 특정 부분은 어떠한 로직이 처리된 이후에 
 * 요청을 받거나, 대기를 하거나, 보류를 하거나 처리할 수 있도록 수동적인 동기처리가 필요한 경우가 있을 것이다.
 * 
 * 
 * 비동기 작업은 이처럼 순서를 보장하지 않기 때문에 이런 수동적인 동기처리를 하지 않는 경우
 * 원하는 작업대로 흘러가지 않을 수 있다. API 통신에서 특히 그렇다.
 */


/**
 * 비동기에서 동기적 표현 방법
 * 
 * 결국 콜백함수 안에 콜백함수를 넣는 행위는 비동기적 로직안에서 동기적으로 하기 위함이었던 것
 * 
 * 그렇다면 콜백지옥말고 깔끔하게 표현할 수 있는 방법은 뭐가 있을까?
 * 
 * 대표적으로 Promise, Generator(ES6), async/await(ES6) 가 있다.
*/



/**
 * Promise
 * 
 * 1) 처리가 끝나면 알려달라는 약속이다.
 * 2) new 연산자로 호출하고 인자로 넘어가는 콜백은 바로 실행된다.
 * 3) resolve(성공), reject(실패)로 구분한다.
 * 4) 처리 결과에 따라 then (성공), catch (실패)로 로직을 수행한다.
 */

new Promise(function(resolve /*, reject*/) {
    setTimeout(function() {
        var name = "에스프레소";
        console.log(name);
        resolve(name);
    }, 500)
}).then(function(previousName) {
    // 이 안에서도 새롭게 Promise를 만든다.
    return new Promise(function(resolve /*, reject*/) {
        setTimeout(function() {
            var name = previousName + ", 아메리카노";
            console.log(name);
            resolve(name);
        }, 500)
    })
}).then(function(previousName) {
    return new Promise(function(resolve /*, reject*/) {
        setTimeout(function() {
            var name = previousName + ", 카페모카";
            console.log(name);
            resolve(name);
        }, 500)
    })
}).then(function(previousName) {
    return new Promise(function(resolve /*, reject*/) {
        setTimeout(function() {
            var name = previousName + ", 카페라떼";
            console.log(name);
            resolve(name);
        }, 500)
    })
})

console.log('----------------------------------');

/**
 * 반복되는 Promise 부분을 리팩토링하는 방법
 * 
 * 리팩토링 : 비효율적인 코드를 효율적으로 만드는 것
 * 
 * 위에 함수는 커피 이름을 붙여 출력하는 것이 반복된다.
 * 이름 인자를 받아서 상위 이름에 붙여넣는 방식으로 콜백함수를 넣어주면 어떨까?
 */

var addCoffee = function (name) {
    return function(previousName) {
        return new Promise(function(resolve /*, reject*/) {
            setTimeout(function() {
                //ES6 부터 백틱 기능을 사용하여 깔끔하게 정리 
                var newName = previousName ? `${previousName}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};

addCoffee("에스프레스")()
.then(addCoffee("아메리카노"))
.then(addCoffee("카페모카"))
.then(addCoffee("카페라떼"));



/**
 * 위 코드를 확인해보면 리팩토링 전과 동일하게 처리되지만 코드의 수가 확연하게 줄어든 것을 확인할 수 있다.
 * 
 * 또한, then을 기준으로 그 전에 함수를 호출하는 것과 then 이후 함수를 호출하는 것을 구분지어서
 * 처음 데이터를 입력받았을 때, 해당 데이터만 출력하고
 * 데이터가 있는 경우 이전 데이터에 추가된 데이터를 추가하는 로직까지 구현한 것을 알 수 있다.
 */