function getForecast() {
    var city = document.getElementById("cityInput").value;

   
    if (city.trim() === "") {
        alert("Please enter a city name");
        return;
    }
  
    var apiUrl = https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={1c187aa2ee25002bc7ba1223ad71ad5d};

    fetch(apiUrl)
        .then(response => response.json()) 
        .then(data => {
            displayForecast(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
