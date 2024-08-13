/**
 * this 우회, this 콜백함수에서의 this, 생성자에서의 this
 * 
 */


/**
 * this 우회
 * 
 * 호출 주체에 따라 this가 바라보는 객체가 다르다.
 * 하지만 내부 함수에서 개발자가 원하는 this의 방향은 틀릴 수 있다.
 * 그렇다면 this를 우회하는 방법은 없을까?
 */

// 1) 변수를 활용한다
// AS - IS 는 기존코드
// TO - BE 는 변경코드를 의미한다
var obj1= {
    outer: function () {
        console.log('TEST => ', this);

        // AS - IS
        var innerFunc = function () {
            console.log('TEST AS-IS => ', this);
        }
        innerFunc(); // global

        // TO - BE
        var innerFunc2 = function () {
            console.log('TEST TO-BE => ', self);
        }
        let self = this;
        innerFunc2(); // outer, obj1 을 가리키게 됨 

        var obj2 = {
            innerMethod: innerFunc,
        };
        obj2.innerMethod(); // obj2
    }
}
obj1.outer();

// 2) 화살표 함수를 사용한다 (ES6 에 도입)
// 내부 함수에서 this가 유실되는 문제(global) 때문에 도입되었다고 봐도 무방
// 화살표 함수는 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 없다.
// 따라서, this는 이전 값 - 상위 값이 유지가 된다.
// 일반 함수와 화살표함수의 가장 큰 차이점은 this 바인딩이다.
// this를 바인딩하는 방법 중에서는 call, apply, bind 보다 편리한 방법일 수 있다.

var obj3 = {
    outer: function() {
        console.log('TEST => ', this);

        var innerFunc = () => {
            console.log('TEST => ', this);
        }
        innerFunc(); // 호출 주체가 없어도 outer를 바라본다
    }
}
obj3.outer();


/**
 * 콜백 함수 호출 시, 그 함수 내부에서의 this
 * 
 * 함수 매개변수로 다시 함수를 불러오는 것, 그렇게 불러와지는 것을 콜백함수라고 하는데
 * 여기서 콜백함수는 this를 유실하게된다.
 * 단, addEventListener 처럼 자동으로 this를 상속하게 해주는 메서드의 경우 예외이다.
 * 
 * 유실되었다고 this가 없는것이 아니다. 전역 객체로 지정되는 것 뿐.
 */

// 별도 지정이 없으므로 전역객체 (window)
setTimeout(function () {console.log(this)}, 3000);

// 별도 지정이 없으므로 전역객체 (window)
[1,2,3,4,5].forEach(function (x) {
    console.log(this, x); // undefined, 1, 2, 3, 4, 5
})

//addEventListener 안에서의 this는 항상 호출한 주체의 element를 return 하도록 설계되어있음.
// 따라서 this는 button이 됨
document.body.innerHTML += '<button> id="a">클릭</button>';
document.body.querySelector('#a').addEventListener('click', function(e) {
    console.log(this, e); // button, Event
});


/**
 * 생성자 함수 내부에서의 this
 * 
 * 1) 생성자 : 구체적인 인스턴스를 만들기 위한 일종의 틀 키워드 constructor() {}
 * 2) 공통 속성들이 이미 준비되어 있다.
 */

// 생성할 때 쓰이는 this와 호출할때 쓰는 this가 바라보는 주체가 다르다.
var Cat = function (name, age) {
    this.bark = '야옹'
    this.name = name,
    this.age = age,
    console.log(this);
};

var cat1 = new Cat('뭉치', 2);

