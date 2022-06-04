var searchFormEl = document.querySelector("#search-form");
var cityInputEl = document.querySelector("#city-search");
var currentWeatherEl = document.querySelector("#current-weather");
var city;
var lat;
var lon;

var formSubmitHandler = function (event) {
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

var getCoordinates = function(city) {

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
            renderResults();
        }) 
        .catch(function (error) {
            alert("Unable to connect");
        });
}

function renderResults() {
    // Print city to page
    var cityName = document.createElement("h3");
    cityName.textContent = city;
    currentWeatherEl.appendChild(cityName);
}

// Add event listener to form
searchFormEl.addEventListener("submit", formSubmitHandler);

// This two API call works
/*
var getWeather = function(city) {
    var lat;
    var lon;

    // OpenWeather One Call API uses city entered by user
    var cityApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7ab439372a6b7834b1058543aced3bee";

    fetch(cityApi)
        .then(function(response) {
            return response.json();

        }).then (function (data) {
            // Set latitude and longitude information from city to variables
            lat = data.coord.lat;
            lon = data.coord.lon;

            // Use lat and long variables to get current conditions and seven day weather
            return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=7ab439372a6b7834b1058543aced3bee");
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                alert("Error: City not found");
            }
        }).then(function(data) {
            console.log(data);

            // Print city to page
            var cityName = document.createElement("h3");
            cityName.textContent = city;
            currentWeatherEl.appendChild(cityName);
        }) 
        .catch(function (error) {
            alert("Unable to connect");
        });
}
*/



// Search for a city

// City is added to search history

// Present weather conditions: city name, date, icon representation of weather conditions, temperature, humidity, wind speed, UV index)

// UV index is a color that indicates if weather is favorable, moderate, severe

// Future weather conditions: 5-day forecast, date, icon representation of weather conditions, temperature, wind speed, humidity

// Click on city in search history for conditions for that city


/*
var getCoordinates = function (city) {
    // OpenWeather One Call API uses city entered by user
    var cityApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7ab439372a6b7834b1058543aced3bee";

    // Fetch returns the latitude and longitude for that city
    fetch(cityApi)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log(data.coord.lat);
            // console.log(data.coord.lon);
            var lat = data.coord.lat;
            var lon = data.coord.lon;

            console.log(lat);
            console.log(lon);
        })
};

var getWeather = function () {
    var weatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&units=imperial&appid=7ab439372a6b7834b1058543aced3bee";

    fetch(weatherApi)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function () {
                    console.log(response);
                });
            } else {
                alert("Error: City not found");
            }
        })
        .catch(function (error) {
            alert("Unable to connect");
        })

}
*/

// This works to get the latitude and longitude of a city
/*
var getCoordinates = function (city) {
    // Format the OpenWeather One Call API
    var cityApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=7ab439372a6b7834b1058543aced3bee";

    // Make a get request to url
    fetch(cityApi)
        .then(function(response) {
            // Request was successful
            if (response.ok) {
                // console.log(response);
                response.json().then(function(data) {
                    console.log(data.coord.lat);
                    console.log(data.coord.lon);
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
*/

// var displayWeather = function()