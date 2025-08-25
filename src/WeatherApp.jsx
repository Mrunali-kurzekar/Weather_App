import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState, useEffect } from "react"

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "d21ec79749152a47d9a15049cc7a5c13";

  // fetch weather by city name
  const fetchWeather = async (city) => {
    try {
      setError(null); // reset error before fetch
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message); // handle API error
      }

      let newInfo = {
        city: data.name,
        lon: data.coord.lon,
        lat: data.coord.lat,
        temp: data.main.temp,
        temp_Min: data.main.temp_min,
        temp_Max: data.main.temp_max,
        humidity: data.main.humidity,
        feels_Like: data.main.feels_like,
        weather: data.weather[0].description,
      };

      setWeatherInfo(newInfo);
    } catch (err) {
      setWeatherInfo(null); // clear previous data
      setError("City not found! Please try again.");
    }
  };

  // run once → default city Delhi
  useEffect(() => {
    fetchWeather("Delhi");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "Blue" }}>Weather App For You</h1>

      <SearchBox onSearch={fetchWeather} />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherInfo ? <InfoBox info={weatherInfo} /> : !error && <p>Loading...</p>}
    </div>
  );
}
