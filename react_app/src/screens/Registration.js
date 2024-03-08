import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registration } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import pic from "../images/wp.jpg";

export const Registration = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: userLoginUserInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  let navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (userInfo || userLoginUserInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(registration(first_name, last_name, username, email, password));
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      if (error) {
        throw new Error(error.detail);
        console.log("may error", error.detail);
      }
      if (password === confirmPassword && !error) {
        navigate("/login");
      }
    } catch (error) {
      throw new Error(error.detail);
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
          backgroundImage: `url(${pic})`,
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
          top: "80px",
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
              color: "#000000",
              padding: "5px",
            }}
          >
            X
          </button>
        </Link>
        <form onSubmit={submitHandler}>
          <p
            style={{
              color: "#000000",
              display: "flex",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            Registration!
          </p>
          {error && (
            <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          )}
          <div
            style={{
              display: "flex",
              color: "#000000",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <label>First Name:</label>
            <input
              type="text"
              value={first_name}
              required
              onChange={(e) => setFirstName(e.target.value)}
              style={{ width: "100%" }}
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
            <label>Last Name:</label>
            <input
              type="text"
              value={last_name}
              required
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: "100%" }}
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
            <label>Username:</label>
            <input
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "100%" }}
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
            <label>Email:</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%" }}
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
              style={{ width: "100%" }}
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
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              color: "#000000",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
