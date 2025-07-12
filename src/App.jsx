import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecastData] = useState([]);
  const [city, setCity] = useState("Lahore");
   const [inputValue, setInputValue] = useState("Lahore");
  const apiKey = "1cda839d63e34fea53e3b4eaa3f949b8";
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  let temperature = weatherData?.list?.[0]?.main?.temp;
  const wholeTemp = parseInt(temperature);

  useEffect(() => {
    async function getData() {
      let response = await fetch(url);
      let data = await response.json();
      setWeatherData(data);
    }
    getData();

    async function forecastData() {
      let response = await fetch(url2);
      let data = await response.json();
      const dailyForecast = data.list.filter((_, index) => index % 8 === 0);
      setForecastData(dailyForecast);
    }
    forecastData();
  }, [city]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    setCity(inputValue);
  }
  return (
    <>
      <div className="wrapper">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter city name"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        <div className="header">
          <h1 className="location">
            {weatherData?.city?.name || "Loading..."}
          </h1>
          <h2 className="temperature">{wholeTemp || "..."}°C</h2>
          <p className="condition">
            {weatherData?.list?.[0]?.weather?.[0]?.description}
          </p>
        </div>

        <div className="details">
          <div>
            <p>Humidity</p>
            <p>{weatherData?.list?.[0]?.main?.humidity} %</p>
          </div>
          <div>
            <p>Wind Speed</p>
            <p>{weatherData?.list?.[0]?.wind?.speed} mph</p>
          </div>
        </div>

        <div className="line"></div>

        <h3>5-Days Forecast</h3>
        <div className="week-forecast">
          {forecast.map((day, index) => (
            <div key={index} className="day-forecast">
              <p className="week-day">
                {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
              />
              <p className="week-day">{Math.round(day.main.temp)}°C</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
