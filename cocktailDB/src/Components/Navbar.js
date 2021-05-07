import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav1">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </nav>
      <nav className="nav2">
        <ul>
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/about" className="home">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
