import React from "react";
import "./Dashboard.css";
import avengerImage from "../images/avenger.jpg";
import sevenSundaysImage from "../images/7sundays.jpg";
import zohanImage from "../images/zohan.jpg";
import pic from "../images/bg.jpg";
import a from "../images/poster2.png"
import q from "../images/poster3.png"
import w from "../images/poster4.png"
import e from "../images/poster5.png"
import r from "../images/poster6.png"
import t from "../images/poster7.png"
import y from "../images/poster8.png"
import s from "../images/poster9.png"
import d from "../images/poster10.png"
import f from "../images/poster11.png"
import g from "../images/poster12.png"


const movies = [
  {  image: zohanImage, link: "https://ww16.0123movie.net/movie/you-dont-mess-with-the-zohan-6396.html" },
  {  image: avengerImage, link: "https://ww16.0123movie.net/movie/the-avengers-1717.html" },
  {  image: sevenSundaysImage, link: "https://ww16.0123movie.net/movie/easter-sunday-1630853957.html" },
  {  image: a, link: "https://ww16.0123movie.net/movie/mulan-2009-16943.html" },
  {  image: q, link: "https://ww16.0123movie.net/movie/The-Falcon-Winter-Soldier-1-12101099.html" },
  {  image: w, link: "https://ww16.0123movie.net/movie/avengers-endgame-28501.html" },
  {  image: e, link: "https://ww16.0123movie.net/movie/loki-season-2-1630855858.html" },
  {  image: r, link: "https://ww16.0123movie.net/movie/thor-ragnarok-22466.html" },
  {  image: t, link: "https://ww16.0123movie.net/movie/easter-sunday-1630853957.html" },
  {  image: y, link: "https://ww16.0123movie.net/movie/easter-sunday-1630853957.html" },
  {  image: s, link: "https://ww16.0123movie.net/movie/easter-sunday-1630853957.html" },
  {  image: d, link: "https://ww16.0123movie.net/movie/soul-101917.html" },
  {  image: f, link: "https://ww16.0123movie.net/movie/thor-ragnarok-22466.html" },
  {  image: g, link: "https://ww16.0123movie.net/movie/loki-season-2-1630855858.html" },
  {  image: zohanImage, link: "https://ww16.0123movie.net/movie/easter-sunday-1630853957.html" },
  {  image: avengerImage, link: "https://ww16.0123movie.net/movie/thor-ragnarok-22466.html" },
  {  image: sevenSundaysImage, link: "https://ww16.0123movie.net/movie/easter-sunday-1630853957.html" },
  {  image: a, link: "https://ww16.0123movie.net/movie/mulan-2009-16943.html" },
  {  image: q, link: "https://ww16.0123movie.net/movie/The-Falcon-Winter-Soldier-1-12101099.html" },
  {  image: w, link: "https://ww16.0123movie.net/movie/avengers-endgame-28501.html" },
  {  image: e, link: "https://ww16.0123movie.net/movie/loki-season-2-1630855858.html" },
  {  image: r, link: "https://ww16.0123movie.net/movie/thor-ragnarok-22466.html"  },
  {  image: t, link: "https://ww16.0123movie.net/movie/soul-101917.html" },
  {  image: y , link: "https://ww16.0123movie.net/movie/soul-101917.html"},
  {  image: s , link: "https://ww16.0123movie.net/movie/soul-101917.html"},
];

const MovieCard = ({ title, genre, image, link }) => (
  <a href={link} style={{ textDecoration: "none" }}>
    <div className="movieCard">
      <img className="movieImage" src={image} alt={`${title} Poster`} />
      <h2>{title}</h2>
      <p>{genre}</p>
    </div>
  </a>
);
const Dashboard = () => (
  <div>
    <header style={{ backgroundColor: "black", padding: "5px", display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ color: "blue" }}>In-Bang</h1>
        <nav style={{ marginLeft: "20px" }}>
          <ul style={{ listStyle: "none", display: "flex", alignItems: "center" }}>
            <li style={{ marginRight: "10px" }}>
              <a href="/Movie" style={{ color: "white", textDecoration: "none" }}>Movie</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="/TV shows" style={{ color: "white", textDecoration: "none" }}>TV shows</a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a href="/K-Drama" style={{ color: "white", textDecoration: "none" }}>K-Drama</a>
            </li>
            <li>
              <a href="/Disney" style={{ color: "white", textDecoration: "none" }}>Disney</a>
            </li>
          </ul>
        </nav>
      </div>
      <a className="custom-button" href="/" style={{ backgroundColor: "#f44336", color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer", alignSelf: "flex-start" }}>
        Log out
      </a>
    </header>
    {/* Rest of the component */}

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
