// background.js
const body = document.querySelector("body");

const IMG_NUMBER = 5;

// function handleImgLoad(){
//     console.log("finished loading");
// }
//원격이라 우리가 할 필요가 없는 작업

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  // image.addEventListener("loadend", handleImgLoad);
  //원격이라 우리가 할 필요가 없는 작업
}

function genRandom() {
  //generateRandom
  const number = Math.floor(Math.random() * IMG_NUMBER);
  //    1~5사이의 랜덤수
  return number;
}
// ceil: 천장, floor: 바닥

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
