/**
 * 명시적 this binding
 * 
 * call, apply, bind 메서드
 * 콜백 함수에서의 this를 유지하기 위해 let self; 를 선언해주는 것보다
 * call, apply, bind를 통해 더 명료하고 직관적으로 코딩을 할 수 있다.
 */


/**
 * call
 * 1) 호출 주체인 함수를 즉시 실행하는 명령어.
 * 2) 호출 주체가 있든 없든 this 매개변수에 객체를 넣어 
 *    this의 호출주체를 명시적으로 binding 가능하다.
 */
var func = function (a,b,c) {
    console.log(this, a, b, c);
};

//no binding
// func(1,2,3);


// 호출 주체가 없는 경우(전역 객체) 명시적 binding
func.call({x: 1}, 4,5,6);

console.log('-------------');


//호출 주체가 있는 경우에서도 명시적 binding 가능
var obj = {
    method: function (x,y) {
        console.log(this, x, y);
    },
};
obj.method.call({y: 2},8,9);

console.log('-------------');

/**
 * apply
 * 
 * call과 똑같지만 this 뒤에 매개변수를 []로 묶어주는 것이 다르다.
 */
func.apply({x: 1}, [4,5,6]);
obj.method.apply({y: 2},[8,9]);

console.log('-------------');

/** 
 * 유사배열객체 (array-like-object)
 * this 바인딩을 위해 call, apply를 사용하지만 배열을 만드는데에도 사용이 가능하다.
 * 
 * 단, 조건이 필요한데 반드시 length가 필요하고, index의 번호가 '0' 부터 시작해서 '1'씩 증가해야한다.
 * index의 경우 바뀌어도 되지만 오류가 발생할 수 있다.
 */

var arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3,
};

Array.prototype.push.call(arrayLike, 'd');
console.log(arrayLike);

var arr = Array.prototype.slice.call(arrayLike);
console.log(arr);

console.log('-------------');

/**
 * 하지만 call과 apply는 this 바인딩을 위해 만들어진 메서드이다.
 * 
 * 때문에 ES6 부터 Array에 from 메서드가 도입되었는데
 * from으로 call, apply 보다 간편하게 객체를 배열로 만들 수 있게 된다.
 */

var obj = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3,
};

var arr = Array.from(obj);
console.log(arr);