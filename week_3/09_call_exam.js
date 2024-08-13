/**
 * call
 * 공통 인스턴스를 생성자로 받고 싶을 때 재사용성을 높일 수 있는 방법
 */

// 3) Student와 Employee의 공통점은 사람이기 때문에 
// 4) name, gender 프로퍼티를 가진 Person 생성자를 만들어준다.
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

// 1) 만약 name, gender가 같은 객체를 생성하는 함수가 있다고 치자.
// 2) 공통된 부분이 있어 합치고 싶은 욕구가 생길 것이다. 효율을 위해.
function Student(name, gender, school) {

    // 5) name, gender를 가진 Person을 호출하면서 인스턴스를 생성해준다.
    // 6) this는 Student의 this가 들어가게 된다.
    Person.call(this, name, gender);

    // 7) 아래 공통 인스턴스는 삭제해준다.
    // this.name = name;
    // this.gender = gender;
    this.school = school;
}
function Employee(name, gender, company) {
    Person.call(this, name, gender);
    // this.name = name;
    // this.gender = gender;
    this.company = company;
}

var kd = new Student('길동','male','서울대');
var ks = new Student('길순','female','삼성');
