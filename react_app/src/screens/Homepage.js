import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import pic from "../images/homepage.jpg";

function Homepage() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${pic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      <NavLink to="/login">
        <button
          style={{
            position: "fixed",
            top: "5vh",
            right: "5vw",
            cursor: "pointer",
            border: "2px solid rgba(18, 0, 184, 1)",
            backgroundColor: "rgba(18, 0, 184, 1)",
            borderRadius: "5px",
            color: "#ffffff",
            padding: "2vh 3vw",
            fontSize: "3vh",
          }}
        >
          Login
        </button>
      </NavLink>
      <div
        style={{
          position: "fixed",
          bottom: "10vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2vh",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{
            color: "#ffffff",
            width: "50vw",
            border: "2px solid rgba(255, 0, 38, 0.5)",
            backgroundColor: "rgba(255, 0, 38, 0.5)",
            borderRadius: "5px",
            padding: "2vh",
            textAlign: "center",
            fontSize: "3vh",
          }}
        >
          Are you ready to watch exciting movies? Click the box below to get you
          started!
        </p>
        <Link to="/login">
          <button
            style={{
              cursor: "pointer",
              border: "2px solid rgba(18, 0, 184, 1)",
              backgroundColor: "rgba(18, 0, 184, 1)",
              borderRadius: "5px",
              color: "#ffffff",
              padding: "2vh 3vw",
              fontSize: "3vh",
              marginTop: "2vh",
            }}
          >
            Get Started →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
