/** 얕은 복사
 * 
 * 일반적으로 우리는 객체를 복사할때, 기존의 객체 크기에 맞게 하다보면
 * 객체의 데이터의 크기가 커질수록 유지보수가 어려운 면이 있었다.
 * 
 * 이러한 부분을 개선하기 위해 얕은 복사를 사용한다.
 */

// 이전 객체 복사

const changeUser = (name, age, address) => {
    return {
        name,
        age,
        address
    }
}

const user = {
    name: 'John',
    age: 25,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

let user2 = user;

console.log(user === user2);

user2 = changeUser('Khan', 30, {
    street: '456 Elm St',
    city: 'Los Angeles'
});

console.log(user === user2);


// 아래는 얕은 복사 사용 예시이다.
// Shallow copy
let ChangeUserShallow = (target) => {
    let result = {};

    for(const key in target) {
        result[key] = target[key];
    }
    return result;
}

user2 = ChangeUserShallow(user);
console.log(user);
console.log(user2);
console.log(user===user2);