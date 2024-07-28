async function getdata(city) {
    const apiKey = '7cb2798480b0b56b56706b596db0ba74'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

async function startUpdates() {
    let p1 = document.querySelector(".one");
    let p2 = document.querySelector(".two");
    const inputValue = document.getElementById('inputField').value;
    let ob2 = document.querySelector(".Display h3");
    let ob1 = document.querySelector(".Display h2");
    let weather = await getdata(inputValue);

    p1.innerHTML = "The Temp In";
    p2.innerHTML = "IS";

    if (weather && weather.main && weather.main.temp) {
        // Convert temperature from Kelvin to Celsius
        let tempCelsius = weather.main.temp - 273.15;
        let cloudiness = weather.clouds.all; // Cloudiness percentage
        let weatherDescription = weather.weather[0].description; // Weather description

        ob1.innerHTML = `${weather.name}`;
        ob2.innerHTML = `${tempCelsius.toFixed(2)}°C <br><br> ${weatherDescription} <br><br> ${cloudiness}% Cloudiness`;
    } else {
        console.log('Weather data not available');
        ob1.innerHTML = 'Data not available';
        ob2.innerHTML = '';
    }
}
