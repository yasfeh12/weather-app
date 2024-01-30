console.log("hello world");

var apiKey = "94a9dd50d9451c24e2dc7b65763db4db";

function fetchWeather(city) {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

    return fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.error('Error during fetch:', error);
        });
}

function displayWeather(data) {
    if (data.list && data.list.length >= 5) {
        for (let i = 0; i < 5; i++) {
            const name = data.city.name;
            const icon = data.list[i].weather[0].icon;
            const temp = Math.round(data.list[i].main.temp - 273);
            const humidity = data.list[i].main.humidity;
            const windSpeed = data.list[i].wind.speed;

            const currentDate = dayjs().add(i, 'day');
            const formattedDate = currentDate.format("dddd D MMMM");

            const $weatherCard = $(".weather-card").eq(i);

            $weatherCard.find(".datetime-container").html(formattedDate + " " + '<i class="fas fa-calendar-days"></i>');
            $weatherCard.find(".city").text("City: " + name);
            $weatherCard.find(".icon").attr("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png");
            $weatherCard.find(".weather-info").html(`
                <p>Weather: ${data.list[i].weather[0].main}</p>
                <p>Temperature: ${temp} °C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `);

            $weatherCard.css("display", "block");
        }
    } else {
        console.error("Invalid data format or insufficient forecast items.");
    }
}

$("#search-card").submit(function (event) {
    event.preventDefault();
    var city = $("#cityInput").val().trim();

    if (city !== "") {
        fetchWeather(city)
            .then(function (data) {
                if (data) {
                    displayWeather(data);
                }
            });
    }
});

 $("#new-city-btn").click(function () {
});

document.addEventListener("DOMContentLoaded", function () {
});

