// 구조분해할당 : destructuring (de + structure + ing) 
// de = not
// structure = 구조
// 배열이나 객체의 속성을 모두 하나하나 할당해주는 것

// 1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log("1 => ", value1);
console.log("2 => ", value2);

let arr = ["value1", "value2", "value3"];
let [a,b,c, d=4] = arr;
console.log("a => ", a);
console.log("b => ", b);
console.log("c => ", c);
console.log("d => ", d);


// 2) 객체인 경우
let user = {
    name: "Kahn",
    age: 32
};

let {name, age} = {
    name: "John",
    age: 30
};

console.log("name => ", name);  // string
console.log("age => ", age);    // number

console.log('-----------------------');

let {
    name: NewName,
    age: newAge
} = user;
console.log("NewName => ", NewName);
console.log("newAge => ", newAge);

console.log('-----------------------');

let {
    NewName2,
    NewAge2,
    birth = "today",
} = user;
console.log("NewName => ", NewName2);
console.log("newAge => ", NewAge2);