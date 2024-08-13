// 일급 객체
// 일급 객체(first class object)란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 의미한다.
// 즉, '다른 객체와 일반적으로 같다' 라고 알면 좋다

// 이러한 특징으로 함수를 매우 유연하게 사용이 가능하다.


// 1. 일급객체로서의 함수
// 1-1. 변수에 함수를 할당할 수 있다. 즉, 어느곳에서든 함수를 매개변수로써 사용하거나 변수로써 호출 가능하다는 것.
const sayHello = function () {
    console.log("Hello!");
};


// 1-2. 함수를 인자로 다른 함수에 전달할 수가 있다.
// 1-2-1. 콜백함수 : 매개변수로써 쓰이는 함수
// 1-2-2. 고차함수 : 함수를 인자로 받거나 return하는 함수
function greet(func) {
    // 매개변수로 받은 변수가 사실, 함수다.
    func();
}
greet(sayHello); // Hello!
//greet()은 결국 콜백함수이자 고차함수이다.


// 1-3. 함수를 반환할 수 있다.
function createAdder(num) {
    return function (x) {
        return x + num;
    };
}

const addFive = createAdder(5);
console.log(addFive(10));


// 1-4. 객체의 속성으로 함수를 선언할 수 있다.
const person = {
    name: "John",


    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
    // greet : () => {console.log(`Hello, my name is ${this.name}`)},

}

person.greet(); // Hello, my name is John

// 위에 일반 함수와 화살표 함수로 greet 선언했는데 문제는 화살표 함수에서 this.name을 불러오지 못한다.
// 이 부분은 3주차에서 자세하게 다룰 예정


// 1-5. 배열의 요소로 함수 할당
const myArr = [ function (a, b) {
    return a+b;
    }, 

    function (a, b) {
        return a-b;
    },
];

console.log(myArr[0](1,3), myArr[1](1,3));


console.log('---------------------');

function multipleBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x+y;
}

const multipleByTwo = multipleBy(2);
const multipleByThree = multipleBy(3);

console.log(multipleByTwo(10));
console.log(multipleByThree(10));

const result = add(multipleByTwo(10), multipleByThree(10));
console.log(`FINAL => ${result}`);