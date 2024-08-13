/** 
 * deep copy, 깊은 복사
 * 
 * 하지만, 얕은 복사(shallow copy)의 경우도 문제가 존재
 * 중첩된 객체에 대해서는 완벽한 복사를 할 수 없다.
 * 중첩된 객체란 객체 안에 객체를 의미한다. 즉 위에 있는 address 가 된다.
 * 즉, 객체안에 있는 객체의 주소는 그대로 복제할 수 밖에 없다는 것. address 가 가르키는 주소값을 그대로 가져온다는 뜻이다.
 * 
 * 이 문제를 해결하기 위해 deep copy 를 사용
 *  */


// shallow copy 얕은복사 문제 예시
const ChangeUserShallow = (target) => {
    let result = {};

    for(const key in target) {
        result[key] = target[key];
    }
    return result;
}

let user = {
    name: 'John',
    age: 25,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};

user2 = ChangeUserShallow(user);
user.address.street = '456 Elm St';
console.log(user.address.street === user2.address.street); // true
// 이렇게 user 객체 안에 객체 값을 변경했는데 user2 도 변경된다는 점이다.


// deep copy 예시
// 재귀적 수행(re+cursive), 객체의 프로퍼티 중 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사하는 방향

const ChangeUserDeepCopy = (target) => {
    let result = {};
    console.log(`들어온 값 : ${target}`);

    // 일단 target이 객체인지 확인
    if (typeof target === 'object' && target !== null) {
        for(const key in target) {
            // 본인 함수를 한번 더 수행(재귀)
            console.log(`바뀌어야 할 값 : ${target[key]}`);
            result[key] = ChangeUserDeepCopy(target[key]);
            console.log('------------------');
        }
    } else {    // target 이 primitive 인 경우
        result = target;
    }
    return result;
}

user3 = ChangeUserDeepCopy(user);
user.address.street = '123 Main St';
console.log(user === user3);



/**
 * 얕은 복사와 깊은 복사 결론
 * 
 * 어떤 변수의 불변성을 만들기 위해서는 얕은 복사와 깊은 복사가 있고,
 * 얕은 복사는 객체라면 중첩객체를 완벽하게 복사하지 못한다는 단점이 있었다.
 * 때문에 깊은 복사를 하여 완벽한 불변성 복사를 구현할 수 있다.
 */