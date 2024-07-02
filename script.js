const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            getWeatherByCoords(latitude, longitude);
        });
    }
});

function getWeatherByCoords(lat, lon) {
    fetch(https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}

function getWeatherByInput() {
    const location = document.getElementById('location-input').value;
    fetch(https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    document.getElementById('location').textContent = Location: ${data.name}, ${data.sys.country};
    document.getElementById('temperature').textContent = Temperature: ${data.main.temp} °C;
    document.getElementById('conditions').textContent = Conditions: ${data.weather[0].description};
}