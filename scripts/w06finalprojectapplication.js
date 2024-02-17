// Define a function to fetch the weather forecast
function getForecast() {
   
    var city = document.getElementById("cityInput").value;

  
    if (city.trim() === "") {
        alert("Please enter a city name");
        return;
    }
  
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1c187aa2ee25002bc7ba1223ad71ad5d`;

    fetch(apiUrl)
        .then(response => response.json()) 
        .then(data => {
          
            displayForecast(data);
        })
        .catch(error => {
          
            console.error('Error fetching data:', error);
        });
}


function displayForecast(data) {
  
    var forecastList = data.list;


    document.getElementById("forecast").innerHTML = "";

    for (var i = 0; i < 5; i++) {
        var forecast = forecastList[i];
        var date = new Date(forecast.dt * 1000); 

      
        var forecastDiv = document.createElement("div");
        forecastDiv.textContent = `Date: ${date.toDateString()}, Temperature: ${forecast.main.temp}°C, Weather: ${forecast.weather[0].description}`;

        document.getElementById("forecast").appendChild(forecastDiv);
    }
}


document.getElementById("forecastButton").addEventListener("click", getForecast);
