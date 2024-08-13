// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요

var user = {
  name: "john",
  age: 20,
};

var getAged = function (user, passedTime) {
    
    // user 객체를 복사하지만 나이는 새롭게 선언된 agedUser와 user가 달라야한다.
    // 즉, shallow / deep copy를 통해 복사가 필요하다.
    // 하지만 user 라는 객체안에 객체는 보이지 않기 때문에 shallow copy를 해도 무방하다.
    // 나는 deep copy로 할 예정이다.
    var result ={};
    if (typeof user === 'object' && user !== null) {
        for(const key in user) {
            result[key] = user[key];
        }
    } else {
        return result;
    }
    return result;
};

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log(
      "Passed! If you become older, you will be different from you in the past!"
    );
  } else {
    console.log("Failed! User same with past one");
  }
};

agedUserMustBeDifferentFromUser(user, agedUser);
