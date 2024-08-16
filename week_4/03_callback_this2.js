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
 * 1) obj.logValues(1, 2); 를 하면 메서드로써의 this가 잘 바인딩된 것을 확인할 수 있다.
 * 
 * 1) [4, 5, 6].forEach()의 콜백함수로 obj.logValues를 인자로 전달하면 어떻게 될까?
 * 2) 여기서는 obj를 주체로 한다고 생각하지만 obj라는 객체안에 logValues 라는 함수를 호출한 것 뿐이다.
 * 3) 그러므로 결국 obj 객체 안에 logValues(v, i) 라는 함수가 실행되므로 this는 전역 객체를 바인딩하게 된다.
 * 
 * !! obj.logValues(v, i) 형태로 전달하면 되지 않나?
 * => 이것은 obj의 logValues 메서드가 실행된 결과를 전달하는 것 뿐이다.
 *    즉, 함수를 전달하는 것이 아닌 결과를 전달하는 것이기 때문에 적절하지 않다.
 */

obj.logValues(1, 2);

[4, 5, 6].forEach(obj.logValues)


// 이렇게 