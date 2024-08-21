import React, { useState } from "react";
import useWeatherapi from "./hooks/useWeatherApi"; // Correct import for default export

function App() {
  const [weather,setWeather] =useState({})
  const [country,setcountry] =useState("Pakistan");
  const [city,setCity] =useState("Karachi");

  const data = useWeatherapi(city);


  const oncall=()=>{
    setWeather(data);
 
    
  }
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4">Weather App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="w-[220px] p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter country"
            value={country}
            onChange={(e)=>{setCity(e.target.value)}}
          />
          {/* <select>
          {(data.city).map(e=>
            <option value={e.value}>{e.label}
          </option>)
        }
        </select> */}
          <button onClick={oncall}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
          >
            Search
          </button>
        </div>
        {weather && weather.current &&(

          <div className="text-center">
          <h2 className="text-xl font-bold mb-2">{weather.location.name}, {weather.location.country}</h2>
          <p className="text-l mb-1"></p>
          <h2 className="text-2xl font-bold mb-2">{weather.current.condition.text}</h2>
          <img
            src={weather.current.condition.icon}
            alt="Weather Icon"
            className="mx-auto"
            />
          <p className="text-5xl font-bold mt-4">{weather.current.temp_c}°C</p>
        </div>
          )}
      </div>
    </div>
  );
}

export default App;
