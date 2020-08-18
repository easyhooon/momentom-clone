// const clockContainer = document.querySelector(".js-clock");
// // js-clock이라는 class 이름을 찾아줌
// // query selector는 element의 자식을 탐색함

// const clockTitle = clockContainer.querySelector("h1")

const clockContainer = document.querySelector(".js-clock"),
  // js-clock이라는 class 이름을 찾아줌
  // query selector는 element의 자식을 탐색함
  clockTitle = clockContainer.querySelector("h1");
//위와 같은 표현

function getTime() {
  const date = new Date(); //객체 생성
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //객체안에 텍스트를 넣기 위함
  //삼항 연산자에 대한 이해 (작은 if)
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
