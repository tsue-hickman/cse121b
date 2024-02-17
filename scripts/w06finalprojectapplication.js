
function getForecast() {
    // Get the user's input (city name)
    var city = document.getElementById("cityInput").value;

    // Check if the city name is provided
    if (city.trim() === "") {
        alert("Please enter a city name");
        return;
    }
  
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1c187aa2ee25002bc7ba1223ad71ad5d`;

    fetch(apiUrl)
        .then(response => response.json()) // Parse response as JSON
        .then(data => {
            // Display the forecast
            displayForecast(data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching data:', error);
        });
}
function displayForecast(data) {
    // Get the forecast list from the data
    var forecastList = data.list;

   
    document.getElementById("forecast").innerHTML = "";

 
    for (var i = 0; i < 5; i++) {
        var forecast = forecastList[i];
        var date = new Date(forecast.dt * 1000); // Convert timestamp to date

       
        var forecastDiv = document.createElement("div");
        forecastDiv.textContent = `Date: ${date.toDateString()}, Temperature: ${forecast.main.temp}°C, Weather: ${forecast.weather[0].description}`;

      
        document.getElementById("forecast").appendChild(forecastDiv);
    }
}
