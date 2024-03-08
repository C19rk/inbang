import React from "react";
import { Link } from "react-router-dom";
import pic from "../images/dazzling.jpg";
import pic2 from "../images/wp3.jpg";
import "../styles.css";

function Dashboard() {
  return (
    <div
      style={{
        position: "relative",

        overflow: "hidden",
      }}
    >
      <div style={{ margin: "24px", overflowY: "auto", height: "100vh" }}>
        <div
          style={{
            position: "relative",
          }}
        >
          <div className="carousel">
            <div className="carousel-images"></div>
            <img src={require("../images/slider1.PNG")} alt="Carousel Image" />
            <img src={require("../images/slider2.PNG")} alt="Carousel Image" />
            <img src={require("../images/slider3.PNG")} alt="Carousel Image" />
          </div>
          <div className="video-cards">
            <img src={require("../images/poster 1.png")} alt="Video Card 1" />
            <img src={require("../images/poster 2.png")} alt="Video Card 1" />
            <img src={require("../images/poster 3.png")} alt="Card Slider 2" />
            <img src={require("../images/poster 11.png")} alt="Card Slider 1" />
            <img src={require("../images/poster 12.png")} alt="Card Slider 2" />
            <img src={require("../images/poster 8.png")} alt="Card Slider 1" />
            <img src={require("../images/poster 3.png")} alt="Video Card 2" />
            {/* Add more video cards as needed */}
          </div>

          <div className="card-sliders">
            <img src={require("../images/poster 4.png")} alt="Card Slider 1" />
            <img src={require("../images/poster 7.png")} alt="Styling" />
            <img src={require("../images/poster 11.png")} alt="Card Slider 1" />
            <img src={require("../images/poster 5.png")} alt="Card Slider 2" />
            <img src={require("../images/poster 6.png")} alt="Code Structure" />
            <img src={require("../images/poster 9.png")} alt="Card Slider 1" />
            <img src={require("../images/poster 8.png")} alt="Card Slider 1" />
            {/* Add more card sliders as needed */}
          </div>

          <div className="code-structure">
            <img src={require("../images/poster 6.png")} alt="Code Structure" />
            <img src={require("../images/poster 9.png")} alt="Card Slider 1" />
            <img src={require("../images/poster 10.png")} alt="Card Slider 2" />
            <img src={require("../images/poster 7.png")} alt="Styling" />
            <img src={require("../images/poster 11.png")} alt="Card Slider 1" />
            <img src={require("../images/poster 12.png")} alt="Card Slider 2" />
            <img src={require("../images/slider2.PNG")} alt="Carousel Image" />
          </div>

          <div className="content">{/* Add your content here */}</div>
          <Link to="/login">
            <button
              style={{
                cursor: "pointer",
                border: "2px solid rgba(18, 0, 184, 1)",
                backgroundColor: "rgba(18, 0, 184, 1)",
                borderRadius: "5px",
                color: "#ffffff",
                padding: "10px",
                fontSize: "18px",
              }}
            >
              Login
            </button>
          </Link>
        </div>
        <div style={{ position: "relative" }}>
          <h1
            style={{
              color: "#004cff",
              fontSize: "50px",
              margin: 0,
              padding: 0,
            }}
          >
            인뱅
          </h1>
          <h2
            style={{
              color: "#004cff",
              position: "absolute",
              fontSize: "20px",
              top: "40px",
              left: "50px",
              transform: "rotate(-24deg)",
            }}
          >
            In-Bang
          </h2>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Dashboard;
