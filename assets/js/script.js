var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city-search");
var weatherDisplayEl = document.querySelector("#weather-display");

var formSubmitHandler = function (event) {
    // Prevent page from refreshing
    event.preventDefault();

    // Get value form input element
    var city = cityInputEl.value.trim();

    if (city) {
        getWeather(city);

        // Clear old content
        weatherDisplayEl.textContent = "";
        cityInputEl.value = "";
    } else {
        alert("Please enter a city");
    }
};

var getWeather = function (city) {
    // Format the OpenWeather One Call API
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7ab439372a6b7834b1058543aced3bee";

    // Make a get request to url
    fetch(apiUrl)
        .then(function(response) {
            // Request was successful
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    // displayWeather(data, city);
                });
            } else {
                alert("Error: City not found");
            }
        })
        .catch(function(error) {
            alert("Unable to connect to OpenWeather");
        });
};

// var displayWeather = function()

// Add event listener to form
searchFormEl.addEventListener("submit", formSubmitHandler);

// Search for a city

// City is added to search history

// Present weather conditions: city name, date, icon representation of weather conditions, temperature, humidity, wind speed, UV index)

// UV index is a color that indicates if weather is favorable, moderate, severe

// Future weather conditions: 5-day forecast, date, icon representation of weather conditions, temperature, wind speed, humidity

// Click on city in search history for conditions for that city