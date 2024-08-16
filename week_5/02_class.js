/**
 * 클래스
 * : 객체를 생성하기 위한 설계도이다.
 * 
 */

class Person {
    // 생성자 함수에 해당 객체를 생성하기 위한 사물(인스턴스)을 만들어낸다.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }

    myAge() {
        console.log(`I'm ${this.age} years old.`);
    }
}

// 클래스로 객체를 생성
const person = new Person('John', 21);
console.log(person);
person.name = 'Khan';
console.log(person);
person.greet();
person.myAge();


/**
 * 클래스 실습
 */
class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise() {
        console.log(`${this.modelName} is making a Klaxon!`);
    }

    showDetail() {
        console.log(`Model: ${this.modelName}, Year: ${this.modelYear}, Type: ${this.type}, Price: ${this.price}`);
    }
}

// 자동차 만들기
let car1 = new Car('qu1', 2019, 'normal', 1200);
let car2 = new Car('qu2', 2021, 'hybrid', 3600);
let car3 = new Car('qu3', 2024, 'electro', 5800);
car2.makeNoise();
car3.showDetail();




