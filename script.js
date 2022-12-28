// creating objects:

let weather = {
  "apikey": "af9ad0b82de1a6d0c619fd7e9db05fc1", //open-weather api key
  FetchWeather: function(name) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=metric&appid=" + this.apikey
    ).then((response) => response.json()).then((data) => this.DisplayWeather(data)); //reading data from json file

  },

  //fetching data through the function DisplayWeather

  DisplayWeather: function(data) {
    const {
      name
    } = data;
    const {
      icon,
      description
    } = data.weather[0];
    const {
      temp,
      humidity
    } = data.main;
    var {
      speed
    } = data.wind;

    //updating the weather card using querySelector

    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + " %";
    document.querySelector(".windspeed").innerHTML = "Windspeed : " + speed + " m/sec";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

  },

//below code extracts the input value from the user in the serach-bar
  search: function() {
    this.FetchWeather(document.querySelector(".search-bar").value);
  }
}

//EventListeners for click and enter key

document.querySelector(".search button").addEventListener("click", function() {
  weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    weather.search();
  }
})
