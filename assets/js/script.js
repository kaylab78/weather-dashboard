var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city-search");
var currentWeatherEl = document.querySelector("#current-weather");
var city;
var lat;
var lon;
var currentDate;

function formSubmitHandler (event) {
    // Prevent page from refreshing
    event.preventDefault();

    // Get value form input element
    var city = cityInputEl.value.trim();

    if (city) {
        getCoordinates(city);

        // Clear old content
        currentWeatherEl.textContent = "";
        cityInputEl.value = "";
    } else {
        alert("Please enter a city");
    }
};

function getCoordinates (city) {

    // OpenWeather One Call API uses city entered by user
    var cityApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7ab439372a6b7834b1058543aced3bee";

    fetch(cityApi)
        .then(function(response) {
            return response.json();

        }).then (function (data) {
            // Set latitude and longitude information from city to variables
            lat = data.coord.lat;
            lon = data.coord.lon;
            getWeather(lat, lon);
        })
}

function getWeather() {
    // Use lat and long variables to get current conditions and seven day weather
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=7ab439372a6b7834b1058543aced3bee";

    fetch(weatherApi)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                alert("Error: City not found");
            }
        }).then(function(data) {
            console.log(data);
            renderResults(data);
        }) 
        .catch(function (error) {
            alert("Unable to connect");
        });
}

function renderResults(data) {
    // New dynamic HTML elements for current conditions
    var currentInfoEl = document.createElement("h3");
    var currentTempEl = document.createElement("p");
    var currentWindEl = document.createElement("p");
    var currentHumidityEl = document.createElement("p");
    var currentUvEl = document.createElement("p");

    // Convert unix timestamp into human-readable time (reference: MDN contributors)
    var currentDate = new Date (data.current.dt * 1000).toLocaleDateString("en-US");

    // Set text content for dynamic elements
    currentInfoEl.textContent = city + " " + currentDate;
    currentTempEl.textContent = "Temp: " + data.current.temp + "°F";
    currentWindEl.textContent = "Wind: " + data.current.wind_speed + " MPH";
    currentHumidityEl.textContent = "Humidity: " + data.current.humidity + "%";
    currentUvEl.textContent = "UV Index: " + data.current.uvi;

    // Print city, date and current conditions to page
    currentWeatherEl.appendChild(currentInfoEl);
    currentWeatherEl.appendChild(currentTempEl);
    currentWeatherEl.appendChild(currentWindEl);
    currentWeatherEl.appendChild(currentHumidityEl);
    currentWeatherEl.appendChild(currentUvEl);
}

// Add event listener to form
searchFormEl.addEventListener("submit", formSubmitHandler);

// Search for a city

// City is added to search history

// Present weather conditions: city name, date, icon representation of weather conditions, temperature, humidity, wind speed, UV index)

// UV index is a color that indicates if weather is favorable, moderate, severe

// Future weather conditions: 5-day forecast, date, icon representation of weather conditions, temperature, wind speed, humidity

// Click on city in search history for conditions for that city