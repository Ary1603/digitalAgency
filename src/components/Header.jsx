import React from "react";
import logo from "../assets/imgs/logo.png";

// CSS
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <img id='logo' src={logo} alt="Fable's logo" />
      <h1>Digital agency ___________ thay uplifts brands.</h1>
      <div className="description">
        We are an inovative digital agency specializing in revitalizing brands
        for visionary technologiy companies.
      </div>
    </div>
  );
}

export default Header;
