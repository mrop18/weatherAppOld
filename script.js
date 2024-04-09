const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "06d07b6887msha4edc30b010d279p1956c8jsnc3da6dbf49de",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function fetchWeather() {
//   try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
//   } catch (error) {
    // console.error(error);
//   }
    document.getElementById("Cloud_pct").innerHTML = result.cloud_pct;
    document.getElementById("Temp").innerHTML = result.temp;
    document.getElementById("Feels_like").innerHTML = result.feels_like;
    document.getElementById("Humidity").innerHTML = result.humidity;
    document.getElementById("Min_temp").innerHTML = result.min_temp;
    document.getElementById("Max_temp").innerHTML = result.max_temp;
    document.getElementById("Wind_speed").innerHTML = result.wind_speed;
    document.getElementById("Wind_degrees").innerHTML = result.wind_degrees;
    document.getElementById("Sunrise").innerHTML = result.sunrise;
    document.getElementById("Sunset").innerHTML = result.sunset;

}

fetchWeather();
