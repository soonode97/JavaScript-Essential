/**
 * 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법
 * 
 * 이전에는 call, apply, bind를 통해서
 * 함수 혹은 메서드를 호출 시 this에 {x:1} 처럼 다른 값을 바인딩해보았다.
 * 
 * 동일하게 콜백 함수에서 this가 우리가 원하는 객체를 바라보게 하는 법,
 * 콜백 함수에서 this를 다른 값으로 바인딩 하는 법을 배운다.
 */

var obj1 = {
    name : "obj1",
    func: function() {
        var self = this;
        return function () {
            console.log(self.name);
        };
    },
};

obj1.func();

var callback = obj1.func();
setTimeout(callback, 1000);

/**
 * 위 객체를 예시로 들어보면
 * obj1 객체안에 func 라는 키의 value로 함수가 들어가 있고,
 * 해당 함수 내부에 self=this 라고 self에 this를 저장해주었다.
 * 또한 해당 함수에서 return으로 또 다른 함수를 리턴하는데 저장했던 self(this)의 name 값을 출력하도록 한다.
 * 
 * 1) 여기서 obj1.func(); 라는 것을 통해서 func()를 메서드로써 this 바인딩을 확실하게 해준다.
 * 2) 반환된 값을 var callback 이라는 변수에 담아준다음
 * 3) setTimeout() 함수의 콜백함수로 해당 변수값을 전달하게 된다.
 * 4) 여기까지의 진행 내용을 살펴보자
 * 
 * 
 * 결국 var callback = obj1.func(); 이 부분은 
 * var callback = function () {
            console.log(self.name);
        } 이 되겠고,
 * 

 * setTimeout(callback, 1000); 이 부분은
 * setTimeout(function () {
        console.log(self.name);
    }, 1000) 이 되는 것이다.
 * 


 * 그럼 여기서 확인해볼 수 있는 것은
 * 어? 그냥 함수를 호출했네? 그럼 this가 전역 객체를 바라보는 것인가? 
 * 라고 생각 하겠지만 self 라는 변수가 함수 바깥에서 남아있기 때문에
 * var self=this가 살아있고, obj1의 name을 불러오게 된다는 것이다.
 */


/**
 * 이런 방법을 고안해서 obj1.func 를 수행할 수 있도록 우회하여 지정하는 방법도 있다.
 */

// 1) 새로운 객체의 value로 메서드를 지정해주는 방법
obj2 = {
    name : "obj2",
    func : obj1.func,
}
var callback = obj2.func();
setTimeout(callback, 1000);

//2) obj1.func 를 call 메서드를 통해 this를 명시적으로 바인딩하는 방법
var obj3 = {name : "obj3"};
var callback = obj1.func.call(obj3);
setTimeout(callback, 1000);