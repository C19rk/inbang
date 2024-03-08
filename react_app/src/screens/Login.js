import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector
import { login } from "../actions/userActions"; // Importing the login action
import "../styles.css";
import pic from "../images/wp2.jpg";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login/', {
        username,
        password
      });
      console.log(response.data.message); // Handle success
      // Redirect to Dashboard upon successful login
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Invalid username or password');
    }
  };


  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: "24%",
          backgroundImage: `url(${pic})`, // Use the imported image
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />

      <h1
        style={{
          color: "#004cff",
          fontSize: "150px",
          position: "absolute",
          right: "124px",
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
          right: "24px",
          transform: "rotate(-24deg)",
        }}
      >
        In-Bang
      </h2>

      <div
        style={{
          margin: "auto",
          top: "150px",
          position: "relative",
          width: "300px",
          border: "2px solid rgba(18, 0, 184, 1)",
          backgroundColor: "rgba(18, 0, 184, 1)",
          borderRadius: "24px",
          color: "#ffffff",
          padding: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
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