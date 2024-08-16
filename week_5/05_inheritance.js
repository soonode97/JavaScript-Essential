/**
 * 상속
 * 
 * 클래스에서 등장하며 부모 클래스의 속성을 자식에게 동일하게 부여하는 행위이다.
 * extends 키워드를 사용한다.
 */

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak () {
        console.log(`${this.name} says!`);
    }
}

// extends 키워드로 Animal 클래스의 속성을 Dog에게 부여
class Dog extends Animal {
    
    // Animal 클래스의 speak 메서드를 재정의
    // overriding 이라고 함.
    speak () {
        console.log(`${this.name} bark!`);
    }
}

const dog = new Dog("Max");
dog.speak();