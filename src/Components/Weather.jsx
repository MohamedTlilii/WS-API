import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [weather, setWeath] = useState({});
  //   console.log(weather)
  let lat = 36.7894;
  let lon = 10.1111;
  const handleGetWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=06e2399a35e0d1032beef0b55e3045b7&units=metric`
      )
      .then((response) => {
        setWeath(response.data);
        console.log(response.data);
      })
      .catch((error) => console.dir(error));
  };
  return (
    <div>
      <h1>Today's weather of {weather.name}</h1>
      <button
        onClick={() => {
          handleGetWeather();
        }}
      >
        Get weather
      </button>

      <h2>Temperature : {weather.main && weather.main.temp + "°C"}</h2>
    </div>
  );
}

export default Weather;
