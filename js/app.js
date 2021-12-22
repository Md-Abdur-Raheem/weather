import API_KEY from "./apikey.js";



const searchCity = () => {
   
    const inputField = document.getElementById('input-field');
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${API_KEY}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));
    inputField.value = '';
}

const displayWeather = city => {

    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('weather-status', 'text-white', 'text-center');

    div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}.png" width ="100px" alt="">
            <h1>${city.name}</h1>
            <h3><span>${Math.ceil(city.main.temp-273.15)}</span>&deg;C</h3>
            <h1 class="lead">${city.weather[0].main}</h1>
    `
    weatherContainer.appendChild(div);
}


document.getElementById('search-btn').addEventListener("click", searchCity);
