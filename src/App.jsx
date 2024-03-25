import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      if(!city) return
      const apiKey = import.meta.env.VITE_REACT_APP_APIKEY
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${'ca'},${'us'}&units=imperial&appid=${apiKey}`
        // `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=&{apiKey}`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

// dont need because it fetches a city every key stroke 
  // useEffect(() => {
  //   fetchData();
  // }, [city]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Road Cast Forecast</button>
      </form>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {/* <p>Feels like : {weatherData.main.feels_like}°F</p> */}
          <p>Humidity : {weatherData.main.humidity}%</p>
          <p>Wind Speed : {weatherData.wind.speed}mph</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;




//----------------------------------------------------------

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { useGeolocation } from "@uidotdev/usehooks";

// const APIKEY = import.meta.env.VITE_REACT_APP_APIKEY
// function App() {
//   const [count, setCount] = useState(0)
//   const state = useGeolocation();
//   console.log(state)

//   return (
//     <div>
//       <h1>Road Cast</h1>
//       {APIKEY}
//     </div>
//   )
// }

// export default App
