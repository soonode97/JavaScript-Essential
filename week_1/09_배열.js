// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지", "키위", "포도"];

// 1-2. 크기 지정
let number = new Array(5);

console.log(fruits);
console.log(number);

// 2. 요소 접근
console.log(fruits[0]);

// 3. 배열 메서드
// pop(), 맨 뒤에 요소 제거
// push(), 맨 뒤에 요소 추가
// shift(), 맨 앞에 요소 제거
// unshift(), 맨 앞에 요소 추가
// splice(), 시작지점과 제거할 개수를 지정하여 반환
console.log(fruits.splice(0, 3));

// slice(), 시작지점과 종료지점을 지정하여 반환

// 4. forEach()
number = [23, 12, 76, 56, 6];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
//number.forEach(function () {});

number.forEach(function (value, index) {
    console.log(index + " : " + value);
});


// 5. map()
let number2 = number.map(function (value) {

    // 반드시 return을 가진다.
    // 기존 배열을 순회하면서 새로운 배열을 반환해주는 용도
    // 항상 원본의 길이만큼 return이 된다.

    return value * 2;
});
console.log(number2);

// 6. filter()
// 순회하며 조건이 맞는 경우 반환해주는 역할 
let number3 = number.filter(function (value) {
    return value > 30;
});
console.log(number3);

// 7. find()
// 순회하며 조건이 맞는 첫번째 요소만 반환해주는 역할
let number4 = number.find(function (value) {
    return value > 30;
});
console.log(number4);



// forEach() 를 제외한 map(), filter(), find() 같은 경우 return문이 필요했다.
// 즉, 새로운 배열을 반환해준다는 점이 중요하다.