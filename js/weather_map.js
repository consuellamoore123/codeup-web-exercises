(function(){
    "use strict"


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

//
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
//
//     timeEl.innerHTML = (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) + ":" + (minutes < 10 ? "0" + minutes : minutes) + `<span id="am-pm">${ampm}</span>`
//
// <!--       dateEl.innerHTML = days[day] + ", " + date+ " " + months[month]-->
//     <!--}, 1000);-->
//


// Get Weather Data
    const getWeatherData = (lat, lng, key) => {
        navigator.geolocation.getCurrentPosition((success) => {
            console.log(success);

            // let {latitude, longitude} = success.coords;
            let latitude = lat
            let longitude = lng

            fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly, minutely&units=imperial&appid=${key}`).then(res => res.json()).then(data => {
                console.log(data);
                // showWeatherData(data);
                cardMarkup(data);

            });
        });
    }

    getWeatherData(29.41824, -98.65177, OPEN_WEATHER_APPID);
// Creating Cards
    const cardMarkup = (data) => {
        console.log(data.daily);
        let markup = "";
        data.daily.forEach((day, i) => {
            if (i < 5) {
                const humidity = day.humidity;
                const pressure = day.pressure;
                const windSpeed = day.wind_speed;
                const tempDay = day.temp.day;
                const tempNight = day.temp.night
                const sunrise = day.sunrise
                const sunset = day.sunset
                const iconSource = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`

                markup += `
<div class="card text-center">
  <div class="card-header">
   ${window.moment(day.dt * 1000).format("dddd")}

   
  </div>
  <div class="card-body">
      <img src="${iconSource}">
      
    <h6 class="card-title">Day: ${tempDay}&#8457;</h6>
    <h6 class="card-title">Night: ${tempNight}&#8457;</h6>
    <br>
    <h6 class="card-title">Humidity: ${humidity}</h6>
    <h6 class="card-title">Pressure: ${pressure}</h6>
    <h6 class="card-title">Wind Speed: ${windSpeed}</h6>
    <br>
    
    <h6 class="card-title">Sunrise: ${window.moment(sunrise * 1000).format('HH:mm a')}</h6>
    <h6 class="card-title">Sunset: ${window.moment(sunset * 1000).format('HH:mm a')}</h6>
   
  </div>
  <div class="card-footer text-muted"></div>
</div>

`;
            }

        })
        $(".card-container").html(markup)




    }
// Creating map

    mapboxgl.accessToken = MAPBOX_APPID

    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        zoom: 15, // starting zoom
        center: [-98.65177, 29.41824] // [lng, lat]

    });


    let marker;

    map.on("click", (e) => {
        var lng = (e.lngLat.lng);
        var lat = (e.lngLat.lat);
        reverseGeocode({lng: lng, lat: lat}, MAPBOX_APPID)
        getWeatherData(lat, lng, OPEN_WEATHER_APPID)
        if (marker) {
            marker.remove()
        }
        marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map)
        map.setCenter([lng, lat]);
        map.setZoom(15)

    })
// add zoom to map
    map.addControl(new mapboxgl.NavigationControl());


    const geocodeAddressMarker = (address, token) => {
        geocode(address, token).then((res) => {
            console.log(res)
            const lng = res[0]
            const lat = res[1]
            if (marker) {
                marker.remove()
            }
            marker = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map)
            map.setCenter([lng, lat]);
            map.setZoom(15)
            getWeatherData(lat, lng, OPEN_WEATHER_APPID);
        })
    }


    const searchButton = $(`.btn`)
    searchButton.on("click", function (e) {
        e.preventDefault()
        const userInput = $(`.form-control`).val()
        console.log('click')
        console.log(userInput)
        geocodeAddressMarker(userInput, MAPBOX_APPID)

    });


})();








