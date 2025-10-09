import React from "react";
import "../styles/moviecard.css";

function MovieCard({ title, year, description, image }) {
  return (
    <li className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="year">({year})</p>
        <p className="desc">{description.slice(0, 100)}...</p>
      </div>
    </li>
  );
}

export default MovieCard;
