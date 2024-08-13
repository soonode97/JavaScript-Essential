/** 
 * apply
 * 
 * 
 *  */

// 최소 최댓값 구하기

var number = [10, 2, 58, 29, 12];
var max = min = number[0];
number.forEach(function(number) {
    // 현재 돌아가는 숫자가 max보다 큰 경우
    if (number > max) {
        max = number;
    }
    // 현재 돌아가는 숫자가 min보다 작은 경우
    if (number < min) {
        min = number;
    }
});
console.log(max, min);

// apply를 사용하여 쉽게 최소,최댓값 구하는 방법
// Math.max, Math.min 은 배열안에 값 중 가장 큰 값, 가장 작은 값을 반환해주는 기능이다.
// apply는 this 와 배열을 매개변수로 받는다고 하였다. 
// this는 사용하지 않으니 null, 배열은 number로 전달해주면 위 로직과 동일하게 작동하는 것을 볼 수 있다.
// 더욱 간결해지고 직관적이게 되었다.
var max = Math.max.apply(null, number);
var min = Math.min.apply(null, number);
console.log(max, min);


/**
 * Spread Operator
 * 
 * 전개 구문을 통해서도 사용이 가능하다.
 * 하지만 전개 구문을 사용해 Math.max(), Math.min() 을 사용하려면
 * 배열을 풀어줘야 하는데 풀기 위해서 Spread Operator 를 사용할 수 있다.
 * 풀어줘야 하는 이유는 1, 2, 3, 4, ... 처럼 매개변수가 primitive 형태로 들어가야하는데 number가 객체(배열) 이기 때문이다.
 */

var max = Math.max(...number);
var min = Math.min(...number);
console.log(max, min);

