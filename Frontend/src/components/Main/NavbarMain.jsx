import React from "react";
import { Link } from "react-router-dom";
import "./NavbarMain.css";
import logo from "../../images/logo-name-horizontal.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img className="nav-logo" src={logo} alt="Logo" />
        </Link>
        <div className="nav-div">
          <div className="account-info">
            <p className="nav-name">Name</p>
            <p className="nav-company">Company</p>
          </div>
          <ExpandMoreIcon className="expand-icon" />
        </div>
      </div>
    </div>
  );
}
