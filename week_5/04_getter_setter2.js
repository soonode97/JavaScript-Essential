/** Car 클래스에서 getters and setters 활용 */

class Car {
    constructor(modelName, modelYear, type, price) {
        this._modelName = modelName;
        this._modelYear = modelYear;
        this._type = type;
        this._price = price;
    }

    makeNoise() {
        console.log(`${this._modelName} is making a Klaxon!`);
    }

    showDetail() {
        console.log(`Model: ${this._modelName}, Year: ${this._modelYear}, Type: ${this._type}, Price: ${this._price}`);
    }

    get modelName() {
        return this._modelName;
    }
    get modelYear() {
        return this._modelYear;
    }
    get type() { 
        return this._type; 
    }
    get price() { 
        return this._price; 
    }

    set modelName(newModelName) {
        if(newModelName.length <= 0) {
            console.log('Error : 모델명이 입력되지 않았습니다.');
            return;

        } else if (typeof newModelName !== 'string') {
            console.log('Error : 모델명이 문자형이 아닙니다.');
            return;
        }
        this._modelName = newModelName;
    }
    
    set modelYear(newModelYear) {
        if(newModelYear.length !== 4) {
            console.log('Error : 입력된 연도가 4자리가 아닙니다.');
            return;

        } else if (typeof newModelYear !== 'string') {
            console.log('Error : 입력된 연도가 문자형이 아닙니다.');
            return;
        }
        this._modelYear = newModelYear;
    }

    set type(newType) {
        // g(가솔린) / d(디젤) / e(전기차)가 아닌 경우 오류
        if(!['g', 'd', 'e'].includes(newType)) {
            console.log('Error : 모델 타입이 g(가솔린) / d(디젤) / e(전기차)가 아닙니다.');
            return;
        }
        else if(newType.length <= 0) {
            console.log('Error : 모델 타입이 입력되지 않았습니다.');
            return;
        } else if (typeof newType !== 'string') {
            console.log('Error : 모델 타입이 문자형이 아닙니다.');
            return;
        }
        // 검증 완료
        this._type = newType;
    }

    set price(newPrice) {
        if(newPrice.length >= 3) {
            console.log('Error : 모델 가격은 백만 단위로 3자리 이상 입력되어야 합니다.');
            return;

        } else if (typeof newPrice !== 'string') {
            console.log('Error : 모델 가격이 문자형이 아닙니다.');
            return;
        }
        this._price = newPrice;
    }
}

// 자동차 만들기
let car1 = new Car('qu1', 2019, 'g', 1200);
let car2 = new Car('qu2', 2021, 'd', 3600);
let car3 = new Car('qu3', 2024, 'e', 5800);
car1.makeNoise();

console.log(car1.modelName);
car1.modelName = 1;
console.log(car1.modelName);