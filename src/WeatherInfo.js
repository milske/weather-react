import React from "react";
import FormattedDate from "./FormattedDate";

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
              <strong className="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units"> °C </span>
            </div>
            <div className="details">
              <div>Humidity: {props.data.humidity}%</div>
              <div>Wind: {props.data.wind}Km/h</div>
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
