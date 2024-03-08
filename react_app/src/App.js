import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Dashboard2 from "./screens/Dashboard2";
import Homepage from "./screens/Homepage";
import Login from "./screens/Login";
import Movie from "./screens/Movie";
import Navigation from "./screens/Navigation";
import Products from "./screens/Products";
import Profile from "./screens/Profile";
import Registration from "./screens/Registration";
import Subscription from "./screens/Subscription";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
