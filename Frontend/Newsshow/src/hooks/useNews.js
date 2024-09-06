import React, { useState } from 'react'
function useNews(topic) {
  const [data,setData]=useState({});
  fetch(`https://newsapi.org/v2/top-headlines?apiKey=0d6aa31a005b4bdc9d205c7171b9fb87&q=${topic}`)
  .then((res)=>res.json())
  .then((res)=>setData(res))
  return data;
}
export default useNews;
