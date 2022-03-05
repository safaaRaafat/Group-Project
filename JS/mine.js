const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
let searchText = document.querySelector('.searchTerm');
let dayOneHeader = document.querySelector('#dayOne-header');
let dayOne = document.querySelector('#dayOneContent');
let dayOneTemp = document.querySelector('#temprature');
let dayOneIcon = document.querySelector('#weather-icon-container');
let weatherText = document.querySelector('#weather-text');
let rainProbability = document.querySelector('#rain-probability');
let windSpeed = document.querySelector('#wind-speed');

let maxTempd1 = document.querySelector('#max-temprature-1');
let minTempd1 = document.querySelector('#min-temprature-1');
let weatherIconDay2 = document.querySelector('#weather-icon-container2');
let weatherText2 = document.querySelector('#weather-text2');
let dayTwoHeader = document.querySelector('#dayTwo-header');

let maxTempd2 = document.querySelector('#max-temprature-2');
let minTempd2 = document.querySelector('#min-temprature-2');
let weatherIconDay3 = document.querySelector('#weather-icon-container3');
let weatherText3 = document.querySelector('#weather-text3');
let dayThreeHeader = document.querySelector('#dayThree-header');

dayOneHeader.innerHTML = `<p>${weekday[d.getDay()]}</p>
                            <p>${date} ${month}</p>`;

if(d.getDay() == 5){
    dayTwoHeader.innerHTML = `<p>${weekday[d.getDay()+1]}</p>`;
    dayThreeHeader.innerHTML = `<p>${weekday[0]}</p>`
}else if(d.getDay() == 6){
    dayTwoHeader.innerHTML = `<p>${weekday[0]}</p>`;
    dayThreeHeader.innerHTML = `<p>${weekday[1]}</p>`
}else{
    dayTwoHeader.innerHTML = `<p>${weekday[d.getDay()+1]}</p>`;
    dayThreeHeader.innerHTML = `<p>${weekday[d.getDay()+2]}</p>`
};




searchText.addEventListener('keydown', async function(){
let searchWord = searchText.value;
let myData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e0289c5ade264af38a5200301220901&q=${searchWord}&days=3&aqi=no&alerts=no`);
myData = await myData.json()
dayOne.innerHTML =`<p class="ms-3 mt-4 country">${myData.location.name}</p>`
dayOneTemp.innerHTML = `${myData.current.temp_c}°C`;
dayOneIcon.innerHTML = `<img id="weather-icon" class="ms-0" src="${myData.current.condition.icon}" alt="">`;
weatherText.innerHTML = `${myData.current.condition.text}`;
rainProbability.innerHTML = `${myData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
windSpeed.innerHTML = `${myData.forecast.forecastday[0].day.maxwind_kph} km/h`;

maxTempd1.innerHTML = `${myData.forecast.forecastday[1].day.maxtemp_c}°C`;
minTempd1.innerHTML = `${myData.forecast.forecastday[1].day.mintemp_c}°C`;
weatherIconDay2.innerHTML =`<img id="weather-icon-day-two" class="ms-0" src="${myData.forecast.forecastday[1].day.condition.icon}" alt="">`;
weatherText2.innerHTML =`${myData.forecast.forecastday[1].day.condition.text}`;

maxTempd2.innerHTML = `${myData.forecast.forecastday[2].day.maxtemp_c}°C`;
minTempd2.innerHTML = `${myData.forecast.forecastday[2].day.mintemp_c}°C`;
weatherIconDay3.innerHTML =`<img id="weather-icon-day-three" class="ms-0" src="${myData.forecast.forecastday[2].day.condition.icon}" alt="">`;
weatherText3.innerHTML =`${myData.forecast.forecastday[2].day.condition.text}`;
});

// async function callData(){
//     let myData = await fetch('http://api.weatherapi.com/v1/forecast.json?key=e0289c5ade264af38a5200301220901&q=cairo&days=3&aqi=no&alerts=no');
//     myData = await myData.json()

//     console.log(myData.forecast.forecastday[0].day.mintemp_c)
// }


// json.forecast.forecastday[0].day.mintemp_c
// json.forecast.forecastday[0].day.maxtemp_c
// json.forecast.forecastday[0].day.maxwind_kph
// json.forecast.forecastday[0].day.condition.text
// json.forecast.forecastday[0].day.daily_chance_of_rain
// json.location.name
window.onload = async function() {
    let searchWord = searchText.value;
let myData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=e0289c5ade264af38a5200301220901&q=london&days=3&aqi=no&alerts=no`);
myData = await myData.json()
dayOne.innerHTML =`<p class="ms-3 mt-4 country">${myData.location.name}</p>`
dayOneTemp.innerHTML = `${myData.current.temp_c}°C`;
dayOneIcon.innerHTML = `<img id="weather-icon" class="ms-0" src="${myData.current.condition.icon}" alt="">`;
weatherText.innerHTML = `${myData.current.condition.text}`;
rainProbability.innerHTML = `${myData.forecast.forecastday[0].day.daily_chance_of_rain}%`;
windSpeed.innerHTML = `${myData.forecast.forecastday[0].day.maxwind_kph} km/h`;

maxTempd1.innerHTML = `${myData.forecast.forecastday[1].day.maxtemp_c}°C`;
minTempd1.innerHTML = `${myData.forecast.forecastday[1].day.mintemp_c}°C`;
weatherIconDay2.innerHTML =`<img id="weather-icon-day-two" class="ms-0" src="${myData.forecast.forecastday[1].day.condition.icon}" alt="">`;
weatherText2.innerHTML =`${myData.forecast.forecastday[1].day.condition.text}`;

maxTempd2.innerHTML = `${myData.forecast.forecastday[2].day.maxtemp_c}°C`;
minTempd2.innerHTML = `${myData.forecast.forecastday[2].day.mintemp_c}°C`;
weatherIconDay3.innerHTML =`<img id="weather-icon-day-three" class="ms-0" src="${myData.forecast.forecastday[2].day.condition.icon}" alt="">`;
weatherText3.innerHTML =`${myData.forecast.forecastday[2].day.condition.text}`;;
  };