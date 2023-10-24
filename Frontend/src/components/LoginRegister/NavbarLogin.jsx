import React from "react";
import { Link } from "react-router-dom";
import "./NavbarLogin.css";
import logo from "../../images/logo-name-horizontal.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img className="nav-logo" src={logo} alt="Logo" />
        </Link>
      </div>
    </div>
  );
}
