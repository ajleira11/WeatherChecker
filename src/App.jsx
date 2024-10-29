import React, { useEffect, useState } from "react";
import axios from "axios";
import ToggleSwitch from "./ToggleSwitch";
function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [isCelsius, setIsCelsius] = useState(false);

  //units can be imperial for F and metric for C
  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      try {
        const response = await axios.get(isCelsius ? url2 : url);
        setData(response.data);
      } catch {
        alert(`Please Enter a valid City! Thank you!`);
      }
    }
  };

  const searchLocationOnToggle = async () => {
    try {
      const response = await axios.get(isCelsius ? url2 : url);
      setData(response.data);
    } catch {
      alert(`Please Enter a valid City! Thank you!`);
    }
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  useEffect(() => {
    if (location) {
      searchLocationOnToggle();
    }
  }, [isCelsius]);

  return (
    <div className="app">
      <div className="search">
        <input
          className="input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
        />
        <div className="toggles">
          <ToggleSwitch onChange={toggleTemperatureUnit} />
          <p className="label">Use °Celcius</p>
        </div>
        {/* <div className="tempConvert">

          <p>Use Celsius</p>
        </div> */}
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.sys ? <p className="p-tag">{data.sys.country}</p> : null}
          </div>
          <div className="location">
            <p className="p-tag">{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>
                {data.main.temp.toFixed()} {isCelsius ? "°C" : "°F"}
              </h1>
            ) : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p className="p-tag">{data.weather[0].main}</p>
            ) : null}
          </div>
        </div>
        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold p-tag">
                  {data.main.feels_like.toFixed()}
                  {isCelsius ? "°C" : "°F"}
                </p>
              ) : null}
              <p className="p-tag">Real Feel</p>
            </div>
            <div className="humidity">
              {data.main ? (
                <p className="bold p-tag">{data.main.humidity}%</p>
              ) : null}
              <p className="p-tag">Humidity</p>
            </div>
            <div className="wind">
              {data.main ? (
                <p className="bold p-tag">{data.wind.speed} MPH</p>
              ) : null}
              <p className="p-tag">Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
