import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  const btnHandler = () => {
    setCounter(counter + 1)
  }

  const fetchMovies = () => {
    const API_KEY = `f5f2a8af9e8411c878e3917b0bb6f5a5`
    const URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
    fetch(URL)
      .then((response) => {
        return response.json()
      })
      .then((data) => console.log(data))
      .catch((error => error)
      )
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Header name='Manoj' title='First card' />
        <Header name='sam' title='Second card' />
        <Header name='Mam' title='Third card' />
        <span>{counter}</span>
        <button onClick={() => { btnHandler() }}>click Me!</button>
        <Header/>
      </header>
    </div>
  );
}

export default App;
