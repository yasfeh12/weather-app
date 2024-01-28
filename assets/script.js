console.log("hello world");

var apiKey = "94a9dd50d9451c24e2dc7b65763db4db";

// Function to fetch weather data
function fetchWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    return fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.error('Error during fetch:', error);
        });
}


function displayWeather(data) {
    const name = data.name;
    const icon = data.weather[0].icon;
    const temp = Math.round(data.main.temp -273);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    $("#city").text("City: " + name);
    $("#weather-info").html(`
        <p>Weather: ${data.weather[0].main}</p>
        <p>Temperature: ${temp} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `);
}

