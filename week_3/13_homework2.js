// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// **주의사항 : 브라우저에서 테스트해주세요(Chrome → 개발자 도구 → 콘솔에 입력하여 실행)**

/**
 * 1) 일단, 처음 전역 LE에서의 outer는 브라우저 환경이기 때문에 window가 됩니다.
 * 2) fighter.opponent.getFullname() 메서드의 경우 fighter 객체 안에 있는 opponent 객체의 함수를 호출했기 때문에
 *    호출의 주체는 opponent가 되고, this.fullname 은 opponent안에 담긴 fullname인 'Francis Ngannou'가 됩니다.
 * 3) fighter.getName() 의 경우 fighter 객체를 주체로 getName() 메서드를  
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

