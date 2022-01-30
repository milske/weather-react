import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    date: "Sunday 12:30",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 30,
    temperature: 19,
  };

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
              <strong className="temperature">{weatherData.temperature}</strong>
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
            <div className="date">{weatherData.date}</div>
            <div className="description"> {weatherData.description} </div>
            <img src={weatherData.imgUrl} alt="weather-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
