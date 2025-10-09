import React, { useState } from "react";
import MovieCard from "./moviecard"; // карточка отдельно
import "../styles/movielist.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ghibliapi.vercel.app/films");
      const data = await response.json();
      setMovies(data); // сохраняем в state
    } catch (error) {
      console.error("Error loading movies:", error);
    }
    setLoading(false);
  };

  return (
    <div className="list-container">
      <button onClick={loadMovies} className="load-btn">
        {loading ? "Loading..." : "Load Movies"}
      </button>

      <ul>
        {movies.map((movie) => (
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
