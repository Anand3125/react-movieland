import { useEffect, useState } from "react";
import "./App.css";
import SearcIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";

const API_URL = 'http://www.omdbapi.com?apikey=e0a6b95';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]=useState('');

  const searchMovies = async (title) => {
    

const response = await fetch(${process.env.REACT_APP_API_URL}&s=${title});
    
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>AkMovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value) }
        />
        <img src={SearcIcon} alt="search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
