import React from "react";

import "../components/styles/NavBar.css";
import logo from "../images/logo.svg";

const NavBar = (props) => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <a className="Navbar__brand" href="/">
          <img src={logo} alt="logo" className="Navbar__brand-logo"/>
          <span className="font-weight-light">platzi</span>
          <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
