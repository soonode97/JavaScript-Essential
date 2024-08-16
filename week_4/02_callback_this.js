/**
 * 콜백 함수에서의 this 바인딩
 * 
 * 콜백 함수도 함수이기 때문에 호출 주체는 전역 객체가 된다.
 * 하지만 예외사항으로 콜백함수에서 별도로 this가 될 대상을 지정해준 경우는 그 대상을 참조한다.
 * 
 * 동일하게 map 함수를 예시로 본다면
 * map 함수의 매개변수로 콜백함수를 전달해야하기 때문에 map함수에 this 바인딩을 해야할 필요가 있다.
 * 이 말은 map함수가 만약 인자로 콜백함수가 아닌 일반 값을 받게 된다면 상관이 없다는 뜻이다.
 * 
 * map은 매개변수로 콜백함수를 인자로 받아야하기 때문에 해당 map 함수 안에서 call 메서드를 통해
 * this 를 명시적으로 바인딩할 필요가 있다는 뜻이다.
 */

Array.prototype.myMap = function (callback, thisArg) {

    // map 함수에서 return 할 결과 배열
    var mappedArray = {};

    // 전달받은 객체를 순환하기 위해 for 문 사용
    // 객체를 주체로 메서드를 사용했기 때문에 this 는 [1,2,3]이 된다.
    for(let i=0; i<this.length; i++) {
        var mappedValue = callback.call(thisArg || globalThis, this[i]);
        mappedArray[i] = mappedValue;
    }

    // 만들어진 새로운 배열을 return
    // 다만 다른점은 index는 없다는 점
    return mappedArray;
};

// 새로운 배열을 할당하기 위해 newArr을 선언하고, 내가 만든 map 함수를 사용
var newArr = [1,2,3].myMap(function(number){
    return number * 2;
});

console.log(newArr); // { '0': 2, '1': 4, '2': 6 }