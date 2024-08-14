/**
 * 콜백함수에 this를 바인딩하는 가장 좋은 방법 중 하나는 bind() 메서드를 사용하는 것.
 * 
 * 왜?
 * call 과 apply는 즉시 실행 함수이지만 bind는 this를 바인딩한 함수를 반환하여 새로운 함수를 만들어내기 때문이다.
 */
var obj1 = {
    name : "obj1",
    func: function() {
        console.log(this.name);
    },
};

//setTimeout(function() {}, 1000);
// 여기서 bind를 해주어 새로운 함수를 실행해주면 어떨까?

setTimeout(obj1.func.bind(obj1), 1000);
// 1) 이렇게 하게되면 obj1을 this로 강제로 바인딩하게 되어 obj1을 바라보게 된다.

var obj2 = {name:"obj2"};
setTimeout(obj1.func.bind(obj2), 1000);
// 2) 다른 객체를 this로 바인딩할수도 있다.