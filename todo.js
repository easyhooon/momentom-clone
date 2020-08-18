const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
//html에 클래스를 찾는 문장

const TODOS_LS = "toDos";

// const toDos = [];
let toDos = [];

// function filterFn(toDo) {
//   return toDo.id === 1;
//   //true인 것들인 toDos만 return (id가 1일 경우일때만을 의미)
// }

function deleteToDo(event) {
  // console.log(event.target);
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    // console.log(toDo.id, li.id);
    return toDo.id !== parseInt(li.id);
    //string 형이라 string -> int 형번환
  });
  // console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}
//cleanToDos와 filter가 하는 것은 'filterFn'이 체크가 된 아이템들의 array를 주는 것
//이제 우리가 할 것은 cleanToDos
//방금 클릭한 id가 1인 경우가 아닌 toDos를 하고 싶을 때를 의미
//li에 없는 id인 toDos를 체크하고싶을때 - 그것이 지워야 할 것이기 때문

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //LS에는 자바스크립트의 data를 저장할 수 없음. 오직 string만 저장 할 수 있음
  //모든 오브젝트들을 string으로 만들어줘야 됨
  //string으로 바뀌어 저장됨
  //toDos()아님 주의!
}
function paintToDo(text) {
  //   console.log(text);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌"; //win + ;
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  //toDos안에 집어 넣은 후
  saveToDos();
  //저장
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
// 비어있는 li를 만들고 그다음에 버튼, span을 만들고 나서 span을 li안에 넣고, 버튼을 li안에 넣었음
// 마지막으로 lu를 ul에다 append

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    // console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    // console.log(parsedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
      //   console.log(toDo.text);
    });
    //forEach - array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜 주는 것
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
