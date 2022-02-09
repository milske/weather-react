import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{Math.round(props.celcius)}</strong>
        <span className="units">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F{" "}
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <strong className="temperature">{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={showCelcius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
