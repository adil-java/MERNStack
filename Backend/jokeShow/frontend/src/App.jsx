import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      
  }); 

  return (
    <>
      <h1>Code With Adil</h1>
      <h2>Number of jokes: {jokes.length}</h2>
      {jokes.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p> 
        </div>
      ))}
    </>
  );
}

export default App;
