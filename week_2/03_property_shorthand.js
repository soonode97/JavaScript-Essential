// 단축 속성명 : property shorthand
const name = "abc";
const age = 30;

// key, value가 똑같다면 생략을 할 수 있다.
const obj = {
    name, // => name : name
    age, // => age : age
};



//전개 구문 = spread operator
// destructuring 과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1,2,3];
console.log(arr);
console.log(...arr);

let newArr = [...arr, 4];
console.log(newArr);



// 객체
let user = {
    name : 'abc',
    age: 30,
}

let user2 = {...user};

console.log(user === user2);



// 나머지 매개변수 (rest parameter)
function exampleFunc (a,b,c, ...args) {
    console.log(a,b,c);
    console.log(...args);
    console.log('-------------');
    console.log(args);
}

exampleFunc(1,2,3);
exampleFunc(1,2,3,4,5,6,7);

console.log('--------------');


// 템플릿 리터럴 (Template Literal)
// `` 백틱 안에 html 코드가 들어갈수도, 변수가 들어갈수도 있다.
const testValue = "나는 중간";
console.log(`Hello ${3+2} ${testValue} World!`);

// !! 템플릿 리터럴은 멀티라인을 지원한다.
console.log(`
    Hello
        My name is JavaScript!!!!!!

        Nice to Meet you!!!
    `);

