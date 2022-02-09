import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="link">
          This project is{" "}
          <a
            href="https://github.com/milske/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://hungry-knuth-5c89b6.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify{" "}
          </a>
          by Milla Nerg
        </footer>
      </div>
    </div>
  );
}
