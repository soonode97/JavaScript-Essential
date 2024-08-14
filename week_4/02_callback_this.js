/**
 * 콜백 함수에서의 this 바인딩
 * 
 * 콜백 함수도 함수이기 때문에 호출 주체는 전역 객체가 된다.
 * 하지만 예외사항으로 콜백함수에서 별도로 this가 될 대상을 지정해준 경우는 그 대상을 참조한다.
 * 
 * 
 */

Array.prototype.myMap = function (callback, thisArg) {

    // map 함수에서 return 할 결과 배열
    var mappedArray = {};

    for(let i=0; i<this.length; i++) {
        var mappedValue = callback.call(thisArg || globalThis, this[i]);
        mappedArray[i] = mappedValue;
    }

    return mappedArray;
};

var newArr = [1,2,3].myMap(function(number){
    return number * 2;
});

console.log(newArr); // { '0': 2, '1': 4, '2': 6 }