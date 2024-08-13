/**
 * Set
 * 고유한 값을 저장하는 자료구조다.
 * 값만 저장한다.
 * 키를 저장하지는 않는다
 * !! 값이 중복되지 않는 유일한 요소로만 구성된다.
 * 
 * 값 추가, 검색, 삭제, 모든 값 제거, 존재 여부 확인
 */

const mySet = new Set();
mySet.add('value1');
mySet.add('value2');
mySet.add('value4');
mySet.add('value5');
mySet.add('value7');
mySet.add('value9');

// 3개가 아닌 2개가 출력, 똑같은 값을 추가하면 추가되지 않는다. (유일 값)
console.log(mySet.size);

console.log(mySet.has("value1"));
console.log(mySet.has("value2"));
console.log(mySet.has("value3"));

for(const value of mySet.values()) {
    console.log(value);
}