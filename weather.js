const weather = document.querySelector(".js-weather");

const API_KEY = "005990939099b1edccbb6b806bef94e6";
const COORDS = "coords";

//어떻게 javascript를 이용해서 특정URL을 호출하는지
//이 부분이 javascript가 이렇게 강력해진 이유라고 할 수 있음
//js는 웹사이트로 request를 보내고 응답을 통해서 데이터를 얻을 수 있음
//가져온 데이터를 refresh없이도 나의 웹사이트에 적용시킬 수 있기 때문
function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //   console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature}°C @ ${place}`;
    });
}
//then-> 데이터가 우리한테 넘어 왔을 때(뭔가가 끝나길 기다리는 방법)
//fetch가 완료되길 기다려야 하기 때문 (서버로 부터 데이터가 들어올때까지 기다려야 됨)

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoError(position) {
  console.log("Can't access geo location");
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // latitude: latitude,
    // longitude: longitude,
    // 객체의 변수이름과 객체의 key이름을 같게 설정할때는 아래와 같이 작성할 수 있음
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
