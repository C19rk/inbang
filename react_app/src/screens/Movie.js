// Movie.js
import React from "react";

const Movie = ({ title, genre, image }) => (
  <div className="movieCard">
    <img className="movieImage" src={image} alt={`${title} Poster`} />
    <h2>{title}</h2>
    <p>{genre}</p>
  </div>
);

export default Movie;
