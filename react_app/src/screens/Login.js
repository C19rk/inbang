import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import "../styles.css";
import pic from "../images/login.jpg";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login/", {
        username,
        password,
      });
      console.log(response.data.message); // Handle success
      // Redirect to Dashboard upon successful login
      window.location.href = "/dashboard";
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        }}
      />
      <div
        style={{
          width: "300px",
          border: "2px solid rgba(18, 0, 184, 1)",
          backgroundColor: "rgba(18, 0, 184, 1)",
          borderRadius: "24px",
          color: "#ffffff",
          padding: "20px",
          position: "relative", // Added position relative
        }}
      >
        <Link
          to="/"
          style={{
            position: "absolute",
            top: "10px", // Adjusted top position
            right: "10px", // Adjusted right position
            textDecoration: "none",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              border: "2px solid rgba(252, 32, 3, 1)",
              backgroundColor: "rgba(252, 32, 3, 1)",
              borderRadius: "24px",
              color: "#000000",
              padding: "5px",
            }}
          >
            X
          </button>
        </Link>
        <p
          style={{
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            fontSize: "24px",
            fontWeight: "bold",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          Welcome!
        </p>
        {error && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            {error}
          </p>
        )}
        <form onSubmit={submit}>
          <div
            style={{
              display: "flex",
              color: "#000000",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>Username:</label>
            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              color: "#000000",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>Password:</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              type="submit"
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
              Login
            </button>
          </div>
        </form>
        <p
          style={{
            color: "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
        >
          Don't have an account? Click below.
        </p>
        <Link
          to="/registration"
          style={{
            color: "#ffffff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
