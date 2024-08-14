/** 오브젝트
 * 객체, 키와 밸류가 함께 있는 변수
 */

// 1. 오브젝트 선언 및 정의
let person = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(person);
console.log(person.name);
console.log(Object.keys(person));
console.log(Object.values(person));

// 2. 오브젝트 복사 (assign)
let person2= {};
Object.assign(person2, person, {age : 31}); // 중간에 중괄호로 기존 값을 변경하여 복사할 수도 있다.

// 3. 오브젝트 병합 (Spread operator)
let male = {
    gender: "male"
}
let person3 = {
    name: "John",
    age: 30,
    city: "New York",
}
let perfectMan = {...male, ...person3};

console.log(perfectMan);

// 4. 오브젝트 배열 (entries)
let entries = Object.entries(person);

console.log(Object.keys(person));