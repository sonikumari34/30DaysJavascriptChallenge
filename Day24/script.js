import {config} from "./modules/hide.js";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn=document.querySelector(".search button");
const searchBox=document.querySelector(".search input");
const  weatherIcon=document.querySelector(".weather-icon");



async function getWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${config.apiKey}`);
        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
           alert("invalid city name");
            console.log("Weather not found");
        } else {
            const data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            switch (data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = "images/clouds.png";
                    break;
                case "Clear":
                    weatherIcon.src = "images/clear.png";
                    break;
                case "Rain":
                    weatherIcon.src = "images/rain.png";
                    break;
                case "Drizzle":
                    weatherIcon.src = "images/drizzle.png";
                    break;
                case "Mist":
                    weatherIcon.src = "images/mist.png";
                    break;
                case "Snow":
                    weatherIcon.src = "images/snow.png";
                    break;
                default:
                    weatherIcon.src = "images/humidity.png";
                    break;
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});
