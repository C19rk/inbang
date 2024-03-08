import React, { useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import pic from "../images/wp4.jpg";

function Subscription() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
      onClick={() => setSelectedPlan(null)}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: "66%",
          backgroundImage: `url(${pic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />
      <div style={{ margin: "24px", position: "relative" }}>
        <h1
          style={{
            color: "#004cff",
            fontSize: "120px",
            margin: 0,
            position: "absolute",
            top: "-50px",
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
            top: "70px",
            left: "200px",
            transform: "rotate(-24deg)",
          }}
        >
          In-Bang
        </h2>
        <p style={{ color: "#ffffff", fontSize: "24px", fontWeight: "bold" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          Choose your stated plan
        </p>
        <p style={{ color: "#ffffff", fontSize: "18px" }}>
          /Ad free.
          <br />
          /Change or cancel plans anytime.
        </p>
        <table
          style={{
            backgroundColor: "#1200b8",
            color: "#ffffff",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Link
            to="/"
            style={{
              position: "absolute",
              textDecoration: "none",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                border: "2px solid rgba(252, 32, 3, 1)",
                backgroundColor: "rgba(252, 32, 3, 1)",
                borderRadius: "24px",
                color: "#ffffff",
                color: "#000000",
                padding: "5px",
              }}
            >
              X
            </button>
          </Link>
          <tbody>
            <tr>
              <td style={{ padding: "20px", textAlign: "center" }}></td>
              <td style={{ padding: "20px", textAlign: "center" }}>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedPlan === "Standard" ? "#b700ff" : "#3700ff",
                    color: "#ffffff",
                    border: "none",
                    marginTop: "30px",
                    fontSize: "20px",
                    padding: "10px 20px",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan("Standard");
                  }}
                >
                  Standard
                </button>
              </td>
              <td style={{ padding: "20px", textAlign: "center" }}>
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor:
                      selectedPlan === "Premium" ? "#b700ff" : "#3700ff",
                    color: "#ffffff",
                    border: "none",
                    marginTop: "30px",
                    fontSize: "20px",
                    padding: "10px 20px",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan("Premium");
                  }}
                >
                  Premium
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ padding: "20px", textAlign: "center" }}>
                Monthly Price
              </td>
              <td style={{ padding: "20px", textAlign: "center" }}>₱250</td>
              <td style={{ padding: "20px", textAlign: "center" }}>₱530</td>
            </tr>
            <tr>
              <td style={{ padding: "20px", textAlign: "center" }}>
                Video Quality
              </td>
              <td style={{ padding: "20px", textAlign: "center" }}>720p</td>
              <td style={{ padding: "20px", textAlign: "center" }}>4k + HDR</td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Link to="/login">
            <button
              style={{
                cursor: "pointer",
                border: "2px solid rgba(0, 0, 0, 1)",
                backgroundColor: "rgba(0, 0, 0, 1)",
                borderRadius: "5px",
                color: "#ffffff",
                padding: "10px",
                fontSize: "18px",
              }}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
