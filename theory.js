// alert("Im Working. Im JS. Im Beautiful. Im worth it");
// console.log("Im Working. Im JS. Im Beautiful. Im worth it");
// a = 221;
// b = a - 5;
// console.log(b);

// console.log("hello JavaScript");

// // const 선언하면 변수를 바꿀수 없음 바꾸려 하면 error 발생
// // var은 바꿀 수 있음 let과 같이

// const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// console.log(daysOfWeek[4]);

// const nicoInfo = {
//   name: "Nico",
//   age: 33,
//   gender: "Male",
//   isHandsome: true,
//   favMovies: ["Along the gods", "LOTR", "Oldboy"],
//   favFood: [
//     {
//       name: "Kimchi",
//       fatty: false,
//     },
//     {
//       name: "Cheese burger",
//       fatty: true,
//     },
//   ],
// };

// console.log(nicoInfo.gender);

// nicoInfo.gender = "female";

// console.log(nicoInfo.gender);

// console.log(nicoInfo);

// // 정보를 바꿀순있지만 자체를 바꿀순없음
// // console.log( , ) 의 형태로 복수 출력 가능

// function sayHello(potato) {
//   console.log("Hello", potato);
// }

// sayHello("Nicolas");

// function sayHello(name, age) {
//   console.log("Hello!", name, " you have ", age, " years of age.");
// }

// sayHello("Nicolas", 15);

// function sayHello(name, age) {
//   console.log(`Hello! ${name}  you have ${age}  years old`);
// }

// sayHello("Nicolas", 15);

// function sayHello(name, age) {
//   return `Hello! ${name}  you have ${age}  years old`;
// }

// const greetNicolas = sayHello("Nicolas", 15);

// console.log(greetNicolas);

// const calculator = {
//   plus: function (a, b) {
//     return a + b;
//   },
// };

// calculator.plus(5, 5);

// const title = document.getElementById("title");
const title = document.querySelector("#title");
// #querySelector는 노드의 첫번째 자식을 반환함->document로 가서 모든 자식들 중에 찾게됨
// id로 찾고 싶으면 # , 클래스로 찾고 싶으면 .
// console.log(title);

const CLICKED_CLASS = "clicked";

// function handleClick() {
//   // const currentClass = title.className;
//   const hasClass = title.classList.contains(CLICKED_CLASS);
//   // if (currentClass !== CLICKED_CLASS) {
//   if (hasClass) {
//     // title.className = CLICKED_CLASS;
//     title.classList.remove(CLICKED_CLASS);
//   } else {
//     // title.className = "";
//     title.classList.add(CLICKED_CLASS);
//   }
// }
// hasClass는 element가 CLICKED_CLASS를 가지는지 체크함
// 위에 긴 함수의 내용과 title.classList.toggle(CLICKED_CLASS); 과 동일 SIMPLE VER
//classlist에는 method를 추가할 수 있음

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

// DOM
// Document Object Module

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

title.innerHTML = "Hi I'm from JS";
// 우리가 배울 모든 함수들은, 우리가 찾게 될 모든 객체들의 함수들은
// DOM(Document Object Module) 형태로 변경이 가능함!
// console.dir(title);
// title.style.color = "red";
// console.dir(document);
document.title = "I own you";

// function handleResize(event) {
//   console.log(event);
//   //   console.log("I have been resized");
// }

// window.addEventListener("resize", handleResize);

// function handleClick(event) {
//      title.style.color = "red";
//      console.log("I have been resized");
// }

// function handleClick() {
//   console.log(title.style.color);
//   //   title.style.color = "red";
//   //   console.log("I have been resized");
// }

// function handleClick() {
//   const currentColor = title.style.color;
//   console.log(currentColor);
//   //   title.style.color = "red";
//   //   console.log("I have been resized");
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }
//현재 타이틀을 클릭하면 타이틀의 색깔의 정보를 가져오는 함수
//결과적으로 두 가지의 색깔로 깜빡거리는 함수 생성
//스타일은 css에서 자바스크립트에선 로직만 처리

title.addEventListener("click", handleClick);

function init() {
  //   title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
//hadleResize는 윈도우 사이즈가 변경 될 때 함수가 호출되고 handleResize();는 함수가 즉시 호출됨! 차이구분!
// 이벤트를 다룰 함수를 만들때 마다 자바스크립트는 자동적으로 함수를 객체에 붙힘 이걸 다룰 준비가 필요
// -> event가 발생할 때 마다, 이 이벤트 객체가 호출 됨

// if (10 == 5) {
//   console.log("hi");
// } else {
//   console.log("ho");
// }

// === -> check 다른 언어와의 차이 엄격한 비교
// 같은 자료형에 내용도 일치해야 true

// 추상비교 == 비교 전에 두 피연산자를 동일한 자료형으로 변환

function handleOffline() {
  console.log("Bye");
}

function handleOnline() {
  console.log("Welcome Back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
