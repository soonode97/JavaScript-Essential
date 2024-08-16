/**
 * Car 클래스를 활용한 상속 실습
 * 
 * [추가 요구사항]
 * 1. 
 */

class Car {
    constructor(modelName, modelYear, type, price) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.type = type;
        this.price = price;
    }

    makeNoise() {
        console.log(`${this.modelName} is making a Klaxon!`);
    }

    showDetail() {
        console.log(`Model: ${this.modelName}, Year: ${this.modelYear}, Type: ${this.type}, Price: ${this.price}`);
    }
}

class ElectronicCar extends Car{
    // 1. 생성자 재정의가 필요하다면 constructor 사용
    // 2. 여기선 모델 타입이 전기이기 때문에 타입을 따로 지정하지 않도록 함.
    constructor(modelName, modelYear, price, chargeTime) {
        // 3. Car(부모 class)에게도 알려주어야 함.
        super(modelName, modelYear, 'e', price);
        this._chargeTime = chargeTime;
    }
    
    get chargeTime() {
        return this._chargeTime;
    }
    set chargeTime(value) {
        if(value >= 0 && value <= 24) {
            this._chargeTime = value;
        } else {
            console.log('Charge time should be between 0 and 24 hours.');
            return;
        }
    }

    showChargeTime() {
        console.log(`Charge time: ${this._chargeTime} hours`);
    }
}

const eleCar1 = new ElectronicCar('qq21', '2041', 3400, 12);
eleCar1.showChargeTime();
eleCar1.chargeTime = 20;
eleCar1.showChargeTime();