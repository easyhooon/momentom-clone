const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";
//LS Local Strorage
//CN Class Name

// 보통 event가 발생하면 root에서 일어나고 form에서 일어남 event는 일종의 거품 같은 것
// 다른 모든 것들이 event에 반응하게 됨, form을 제출하는 event가 발생하면 event가 document까지 계속 위로 올라감
// 그 document는 다른 곳으로 감(프로그램이 되어진 대로) - 페이지가 새로고침이 됨 (default)

// 위의 설명한 event의 기본 동작(enter를 누르면 입력한 것이 사라지는)을 막고 싶음

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  //event를 막는 1단계
  const currentValue = input.value;
  //   console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  //form을 색칠해주기 위해선, 폼을 숨겨줘야 함
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  //js 내에 작은 로컬 저장소
  if (currentUser === null) {
    //He is not
    askForName();
  } else {
    //he is
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
