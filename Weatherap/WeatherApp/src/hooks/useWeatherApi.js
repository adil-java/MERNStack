// src/hooks/useWeatherApi.js
import { useState, useEffect } from 'react';

function useWeatherapi(country) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=8e996c7baf4e4124a59153302241308&q=${country}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  }, [country]);
  
  return data;
}

export default useWeatherapi;
