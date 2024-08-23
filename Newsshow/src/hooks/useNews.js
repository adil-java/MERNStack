import React, { useState } from 'react'
function useNews(topic) {
  const [data,setData]=useState({});
  fetch(`https://newsapi.org/v2/top-headlines?apiKey=${process.env.apiKey}&q=${topic}`)
  .then((res)=>res.json())
  .then((res)=>setData(res))
    
}
export default useNews;
