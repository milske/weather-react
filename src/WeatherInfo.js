import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <div className="info">
            <h1>
              <div>{props.data.city}</div>
            </h1>
            <div>
              <WeatherTemperature celcius={props.data.temperature} />
            </div>
            <div className="details">
              <div>Humidity: {props.data.humidity}%</div>
              <div>Wind: {Math.round(props.data.wind)} Km/h</div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="infos">
            <div className="date">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="description"> {props.data.description}</div>
            <img src={props.data.iconUrl} alt="weather-pic" />
          </div>
        </div>
      </div>
    </div>
  );
}
