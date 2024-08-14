//아래의 코드를 async/await 로 리팩토링 하기

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

function loadJson(url) {
  return new Promise(function (resolve, reject) {
    fetch(url).then((response) => {
      if (response.status == 200) {
        console.log(response);
        resolve(response.json());
      } else {
        console.log(new HttpError(response));
        reject(new HttpError(response));
      }
    });
  });
}

function koreanMovie() {
  return loadJson(`https://klassic-quote-api.mooo.com/v1/random-quote`)
    .then((res) => {
      alert(`${res.author}: ${res.quote}`);
      return res;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("무언가 에러가 발생했군요!");
        return;
      } else {
        throw err;
      }
    });
}

async function awaitKoreaMovie() {
  await koreanMovie();
  console.log('첫번째 실행완료');
  await koreanMovie();
  console.log('두번째 실행완료');
}

awaitKoreaMovie();

/*
##예제 코드 풀이##
(1) Response 에러 발생 시, HttpError의 원인을 잡아내기 위한 HttpError 클래스가 선언
(2) 한국 영화의 대사를 불러오기 위해 API를 가져오는 loadJson(url) 함수 선언
(3) 대사의 작품과 대사를 반환해주는 koreanMovie() 함수 선언

##async/await 풀이##
1. 주요 기능은 (3)번의 koreanMovie() 함수이고, 대사를 alert로 출력해주는 것입니다.
2. 하지만 대사를 출력하기 위해서는 작품과 대사 정보를 가져와야 하기 때문에 (2)번의 기능이 내포되어 있습니다.
3. (3) 함수가 작동이 된 다음 로직을 수행하도록 처리하기 위해서는 (3) 함수 자체를 동기적으로 호출할 필요가 있습니다.
4. (3) 함수를 동기적으로 수행하기 위해서 (2) 함수 return 값으로 Promise를 반환해주었습니다
5. 또한, Promise는 resolve(성공) 시 then(성공 이후 로직)을 수행하고, reject(실패) 시 catch(실패 후 로직)을 수행하도록 처리할 수 있습니다.
6. (2) 함수의 기존 return 값에서 resolve와 reject로 반환 값을 나눠주었습니다.
7. (3) 함수에는 loadJson 함수 반환에 따른 .then 과 .catch가 잘 작성된 것으로 확인되어 별도 작업을 하지 않았습니다.
8. 이 상태에서 (3) 함수를 동기적으로 사용하기 위해 새로운 (4) awaitKoreaMovie() 함수를 async(비동기)로 선언했습니다
9. (4) 함수 내부에 await을 통해 동기적 수행을 할 수 있도록 코드를 작성합니다.
10. awaitKoreaMovie() 함수를 호출하여 실행했습니다.
*/