/**
 * Static Method(= 정적 메서드)
 * 
 * 선언한 클래스의 인스턴스를 만들고, 인스턴스의 메서드에 접근하여 호출하는 방식이 아니라
 * 인스턴트를 만들지 않아도 클래스의 메서드를 호출할 수 있도록 하는 것이 정적 메서드이다.
 * 
 * 특히 비슷한 특징?의 메서드들을 클래스화해서 정적 메서드로 관리하면 좋을 것 같다. 
 * 객체 단위로 묶어서 재사용할 수 있다는 점이 클래스의 장점이다.
 */

class Calculator {
    static add(a,b) {
        console.log(a+b);
    }
}

Calculator.add(3, 5);