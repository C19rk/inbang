import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import pic from "../images/dazzling.jpg";
import pic2 from "../images/wp3.jpg";
import "../styles.css";

function Dashboard() {
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Import useNavigate

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/"); // Redirect to the index path upon logout
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChangePassword = () => {
    handleCloseUserMenu(); // Close the user menu
    navigate("/change-password"); // Navigate to the change password page
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ margin: "24px", overflowY: "auto", height: "100vh" }}>
        <div style={{ position: "relative" }}>
          <div className="carousel">{/* Carousel images */}</div>
          <div className="video-cards">{/* Video cards */}</div>
          <div className="card-sliders">{/* Card sliders */}</div>
          <div className="code-structure">{/* Code structure */}</div>

          <div className="content">
            {/* Add your content here */}
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
          <button
            onClick={logoutHandler}
            style={{
              cursor: "pointer",
              border: "2px solid rgba(18, 0, 184, 1)",
              backgroundColor: "rgba(18, 0, 184, 1)",
              borderRadius: "5px",
              color: "#ffffff",
              padding: "10px",
              fontSize: "18px",
              marginTop: "20px",
            }}
          >
            Logout
          </button>
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
