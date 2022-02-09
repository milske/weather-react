import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                placeholder="Enter a city"
                type="search"
                autoComplete="off"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm"
              />
            </div>
          </div>
        </form>
        <br />
        <div className="row">
          <div className="col-6">
            <div className="info">
              <h1>
                <div>{weatherData.city}</div>
              </h1>
              <div>
                <strong className="temperature">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span className="units"> °C </span>
              </div>
              <div className="details">
                <div>Humidity: {weatherData.humidity}%</div>
                <div>Wind: {weatherData.wind}Km/h</div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="infos">
              <div className="date">
                <FormattedDate date={weatherData.date} />
              </div>
              <div className="description"> {weatherData.description}</div>
              <img src={weatherData.iconUrl} alt="weather-pic" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e9749c87f79d989e0dfa640ff0c29863";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
