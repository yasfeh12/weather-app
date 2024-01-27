console.log("hello world");

$("button").on("click", function () {
    var city;
    var weather = $(this).attr("city-forcast");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid"+ apiKey;
    var apiKey= "&api_key=94a9dd50d9451c24e2dc7b65763db4db";
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      
        console.log(data);
        console.log(data.data);
  
        var results = data.data;
   
      });
  });