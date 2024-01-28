console.log("hello world");
var city;  
var weather = $(this).attr("city-forcast");
var apiKey = "94a9dd50d9451c24e2dc7b65763db4db";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

$("button").on("click", function () {
    function fetchWeather(city) {
        fetch(queryURL)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);

                var results = data.data;
                displayweather(city, data); 
            });
    }

    fetchWeather(city);
});

function displayweather(city) {
    const name = city;
    const icon = data.weather[0].icon;  
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed; 
}
