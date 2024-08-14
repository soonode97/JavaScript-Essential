/**
 * 2가지 속성이 있는 obj가 아래 있다.
 * 
 * 1) vals라는 배열
 * 2) logValues 라는 함수
 */

var obj = {
    vals: [1,2,3],
    logValues: function(v, i) {
        if (this === global) {
            console.log('this가 글로벌입니다.');
        }
        else {
            console.log(this, 'value:', v, 'index:', i);
        }
        console.log('---TEST END---')
    },
}

/** 
 * 이거를 메서드로서 호출하면 어떻게 될까?
 * 
 * obj.logValues(1, 2); 를 하면 메서드로써의 this가 잘 바인딩된 것을 확인할 수 있다.
 */

obj.logValues(1, 2);

[4, 5, 6].forEach(obj.logValues)