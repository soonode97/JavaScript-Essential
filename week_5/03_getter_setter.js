/**
 * Getter and Setter
 * 
 * 클래스를 선언하고 각종 프로퍼티를 정의하는데
 * 해당 프로퍼티에 접근하여 조작하는 방법 중 하나이다.
 * 
 * . 을 통해 직접 접근을 해도 되지만 Getter 와 Setter를 사용하여 안전하고 간편하게 세팅할 수 있다.
 */

/**
 * Rectangle 클래스로 선언된 인스턴스들은 각 width 와 height을 가지고 있다.
 * 사용자는 각 인스턴스에 접근하여 width와 height 값을 재할당할 수 있는데
 * 기존에 사용했던 .width / .height 의 경우 외부에서 직접 접근하는 방식이기 때문에 위험하다.
 * 
 * !! 특히 Setter의 경우
 *    재할당되어야 하는 값이 유효한 값인지 검증하는 절차도 수행할 수 있기 때문에 용이하다.
 */

class Rectangle {
    constructor(width, height) {
        // _ : underscore, 이것은 은밀하게(private) 감춰야 할 때 사용하는 것 (getters와 setters 를 사용할 때 필요)
        this._width = width;
        this._height = height;
    }

    // width 를 위한 getter
    get width() {
        return this._width;
    }
    // width 를 위한 setter
    set width(value) {
        if(value <= 0) {
            console.log('0보다 커야합니다.');

        } else if (typeof value !== number) {
            console.log('숫자타입이 아닙니다.');
        }
        else
        this._width = value
    }
    // height 를 위한 getter
    get height() {
        return this._height;
    }
    // height 를 위한 setter
    set height(value) {
        if(value <= 0) {
            console.log('0보다 커야합니다.');

        } else if (typeof value !== 'number') {
            console.log('숫자타입이 아닙니다.');
        }
        else
        this._height = value
    }

    // 넓이를 계산하는 메서드
    getExtent () {
        const res = this._width * this._height;
        console.log(`넓이는 ${res} 입니다.`);
    }

    getArea () {
        const res = this._width * this._height;
        console.log(`${this._width}, ${this._height}`);
    }
}

const rect1 = new Rectangle(10,20);
const rect2 = new Rectangle(15,35);
const rect3 = new Rectangle(20,20);

// rect1.getExtent();
rect1.getArea();
rect1.height = 40;
rect1.getArea();