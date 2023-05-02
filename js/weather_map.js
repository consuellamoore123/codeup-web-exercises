(function(){
    "use strict"


mapboxgl.accessToken = MAPBOX_APPID

var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    zoom: 15, // starting zoom
    center: [-98.65177, 29.41824] // [lng, lat]

});

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}

// weathermap

const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemEl = document.getElementById("current-weather-items");
const timezone = document.getElementById("time-zone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


// // Set Time and Date
// setInterval(() => {
//     const time = new Date();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours()
//     const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
//     const minutes = time.getMinutes();
//     const ampm = hour >= 12 ? "PM" : "AM"

    // timeEl.innerHTML = (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) + ":" + (minutes < 10 ? "0" + minutes : minutes) + `<span id="am-pm">${ampm}</span>`

//     dateEl.innerHTML = days[day] + ", " + date+ " " + months[month]
// }, 1000);

getWeatherData()

//Get GeoLocation
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let {latitude, longitude} = success.coords;
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly, minutely&units=metric&appid=${OPEN_WEATHER_APPID}`).then(res => res.json()).then(data => {
            console.log(data);
            showWeatherData(data);

        });
    });
}
//
function showWeatherData(data) {
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + "N " + data.lon + "w ";

    currentWeatherItemEl.innerHTML =
        `<div class="weather-item">
    <div>Humidity</div>
    <div>${humidity}</div>
</div>
<div class="weather-item">
    <div>pressure</div>
    <div>${pressure}</div>
</div>
<div class="weather-item">
    <div>Wind Speed</div>
    <div>${wind_speed}</div>
</div>
<div class="weather-item">
    <div>Sunrise</div>
    <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
</div>
<div class="weather-item">
    <div>Sunset</div>
    <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
</div>

`;


    let otherDayForecast = ""
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
        <div class="other">
        <div class="day">${window.moment(day.dt * 1000).format("ddd")}</div>
        <div class="temp">Night - ${day.temp.night}&#176; C</div>
        <div class="temp">Day - ${day.temp.day}&#176; C</div>
        </div>`

        } else {
            otherDayForecast += `
        <div class="weather-forecast-item">
         <div class="day">${window.moment(day.dt * 1000).format("ddd")}</div>
            <img src=" https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather Icon" class="w-icon">
            <div class="temp">Night - ${day.temp.night}&#176; C</div>
            <div class="temp">Day - ${day.temp.day}&#176; C</div>
        </div>`
        }
       // let search = function(){
        //   this.fetchWeather(document.querySelector(".btn").value)
    })
    weatherForecastEl.innerHTML = otherDayForecast;
}


// showWeatherData().addEventListener('click', searchWeather);
//     currentWeatherItemEl
// });

map.on("click", (e) => {
    var lng = (e.lngLat.lng);
    var lat = (e.lngLat.lat);
    reverseGeocode({lng: lng, lat: lat}, MAPBOX_APPID)
})






})();






