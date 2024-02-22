const apikey = "9871d719b1385a259a42f7d1839bb9e5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector("weather-icon");



async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.main.humidity + "km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = assert/image/cloud.png
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = assert/image/sun.png
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = assert/image/drizzle.png
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = assert/image/fog.png
    }
    else{

        document.querySelector(".weather").style.display = "block";
    }

}

searchBtn.addEventListener("click", ()=>{
    
    checkWeather(searchBox.value);
})

