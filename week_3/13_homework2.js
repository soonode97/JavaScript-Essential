// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

/**
 * 1) 일단, 처음 전역 LE에서의 outer는 브라우저 환경이기 때문에 window가 됩니다.
 * 2) 또한 this의 경우 함수가 호출될 때 결정이 됩니다. 즉, 실행 컨텍스트가 실행되는 시점에 결정됩니다.
 * 3) 첫번째로 실행되는 컨텍스트는 fighter.opponent.getFullname 입니다. fighter.opponent.getFullname() 메서드의 경우 fighter 객체 안에 있는 opponent 객체의 함수를 호출했기 때문에 호출의 주체는 opponent가 되고, this.fullname 은 opponent안에 담긴 fullname인 'Francis Ngannou'가 됩니다.
 * 4) 2, 3번째로 실행되는 컨텍스트 fighter.getName의 경우 fighter 객체 안에 있는 getName() 함수를 호출했기 때문에 호출의 주체는 fighter가 되고, this 바인딩이 되었기 때문에 fighter 객체의 fullname인 'John Jones'가 반환됩니다.
 * 5) 4번째 컨텍스트 fighter.getFirstName 의 경우 fighter 객체를 주체로 접근했으나 => 화살표 함수를 통해 this 바인딩을 하지 않고 실행이 되었습니다. 그러므로 fighter의 상위 주체인 전역 객체(window)가 this가 되고 전역변수로 선언된 fullname('Ciryl') 이 반환되어야 합니다.
 * 6) 5번째 컨텍스트 fighter.getLastName 의 경우 function이 괄호안에 묶인 상태인 것으로 보입니다. 함수 안에 함수가 호출되는 것으로 function()으로 시작하는 부분은 . 혹은 []로 주체를 지정해주지 않은 함수입니다. 호출 주체를 명시할 수 없기 때문에 this는 전역 객체를 의미하게 되고 'Gane'이 반환됩니다.
 * 
 * Not (3)Francis Ngannou VS (4)John Jones
 * It is (4)John Jones VS (5)Ciryl (6)Gane
 * 이 출력됩니다.
 */

var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        console.log(this);
        return this.fullname.split(' ')[1];
    })()
}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

