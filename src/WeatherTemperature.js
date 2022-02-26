import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <strong className="temperature">{Math.round(props.celcius)}</strong>
      <span className="units">°C</span>
    </div>
  );
}
