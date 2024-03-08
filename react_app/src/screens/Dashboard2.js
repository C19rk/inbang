import React from "react";
import "./Dashboard2.css";
import avengerImage from "../images/avenger.jpg";
import sevenSundaysImage from "../images/7sundays.jpg";
import zohanImage from "../images/zohan.jpg";
import pic from "../images/bg.jpg";

const movies = [
  { title: "Zohan", genre: "Sci-Fi", image: zohanImage },
  { title: "Avengers", genre: "Action", image: avengerImage },
  { title: "Seven Sundays", genre: "Drama", image: sevenSundaysImage },
];

const MovieCard = ({ title, genre, image }) => (
  <div className="movieCard">
    <img className="movieImage" src={image} alt={`${title} Poster`} />
    <h2>{title}</h2>
    <p>{genre}</p>
  </div>
);

const Dashboard = () => (
  <div>
    <header>
      <a className="custom-button" href="/">
        Home
      </a>
      <h1>In-Bang Dashboard</h1>
    </header>

    <div
      style={{
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: "24%",
        backgroundImage: `url(${pic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
    />

    <div id="movieContainer">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>

    <footer>
      <p>&copy; 2024 In-Bang Dashboard</p>
    </footer>
  </div>
);

export default Dashboard;
