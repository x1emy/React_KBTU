import React, { useState, useEffect } from "react";
import MovieCard from "./moviecard";
import "../styles/movielist.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const loadMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ghibliapi.vercel.app/films");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error loading movies:", error);
    }
    setLoading(false);
  };

  
  useEffect(() => {
    loadMovies();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const clearSearch = () => setSearch("");

  return (
    <div className="list-container">
      <button onClick={loadMovies} className="load-btn">
        {loading ? "Loading..." : "Reload Movies"}
      </button>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        {search && (
          <button onClick={clearSearch} className="clear-btn">
            ✕
          </button>
        )}
      </div>

      <ul className="movie-ul">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.release_date}
            description={movie.description}
            image={movie.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
