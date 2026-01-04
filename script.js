function getWeather() {
  const location = document.getElementById("locationInput").value;

  if (location === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "7e0ae998334646a784445254253012";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById("weatherResult").innerHTML =
          "<p>❌ City not found</p>";
        return;
      }

      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      const humidity = data.current.humidity;
      const city = data.location.name;
      const country = data.location.country;

      document.getElementById("weatherResult").innerHTML = `
        <h2>${city}, ${country}</h2>
        <p>🌡 Temperature: ${temp} °C</p>
        <p>☁ Condition: ${condition}</p>
        <p>💧 Humidity: ${humidity}%</p>
      `;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("weatherResult").innerHTML =
        "<p>⚠ Something went wrong</p>";
    });
}
