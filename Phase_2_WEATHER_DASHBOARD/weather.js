function getWeather() {

    const apiKey = 'YOUR_API';
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

    if (location.trim() === '') {
        alert('Please enter a location');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('result');
            let weatherDes = data.weather[0].main;
            if (weatherDes.toLowerCase() === 'clear') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/clear_i2v1bh.png" class="logo">
                `
            } else if (weatherDes.toLowerCase() === 'clouds') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/clouds_h7vzqy.png" class="logo">
                `
            } else if (weatherDes.toLowerCase() === 'snow') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/snow_v8pbsn.png" class="logo">
                `
            } else if (weatherDes.toLowerCase() === 'mist') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/mist_wkzkgg.png" class="logo">
                `
            } else if (weatherDes.toLowerCase() === 'rain') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/rain_ogrkzj.png" class="logo">
                `
            } else if (weatherDes.toLowerCase() === 'wind') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/wind_r91l89.png" class="logo">
                `
            } else if (weatherDes.toLowerCase() === 'drizzle') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/drizzle_c9zujk.png" class="logo">
                `
            } else if (weatherDes.toLowerCase() === 'humidity') {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                <img src="https://res.cloudinary.com/dwppqua6v/image/upload/v1707823135/humidity_yiniy0.png" class="logo">
                `
            }else {
                weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].main}</p>
                
                `
            }


            ;
        })
        .catch(error => {
            alert('Error fetching weather data');
            console.error(error);
        });
}