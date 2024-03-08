import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import pic from "../images/dazzling.jpg";
import pic2 from "../images/wp3.jpg";

function Homepage() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          left: "-9%",
          width: "120%",
          height: "120%",
          backgroundImage: `url(${pic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-124deg) scaleX(-1)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          content: "",
          position: "absolute",
          top: "-50%",
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pic2})`,
          opacity: "66%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-154deg) scaleY(-1)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "50%",
          width: "100%",
          height: "100%",
          border: "7px solid rgba(255, 255, 255, 1)",
          transform: "rotate(-154deg) scaleY(-1)",
          boxSizing: "border-box",
          zIndex: 0,
        }}
      />
      <div
        style={{
          content: "",
          position: "absolute",
          bottom: "-50%",
          right: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${pic2})`,
          opacity: "66%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transform: "rotate(-134deg) scaleY(-1)",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50%",
          right: "50%",
          width: "100%",
          height: "100%",
          border: "7px solid rgba(255, 255, 255, 1)",
          transform: "rotate(-134deg) scaleY(-1)",
          boxSizing: "border-box",
          zIndex: 0,
        }}
      />
      <div style={{ margin: "24px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            zIndex: 2,
          }}
        >
          <NavLink to="/login">
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
          </NavLink>
        </div>
        <div style={{ position: "relative" }}>
          <h1
            style={{
              color: "#004cff",
              fontSize: "150px",
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
              fontSize: "50px",
              top: "110px",
              left: "200px",
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "#ffffff",
              width: "50%",
              border: "2px solid rgba(255, 0, 38, 0.5)",
              backgroundColor: "rgba(255, 0, 38, 0.5)",
              borderRadius: "5px",
              padding: "10px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              fontSize: "24px",
            }}
          >
            Are you ready to watch exciting movies? Click the box below to get
            you started!
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
              Get Started →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
