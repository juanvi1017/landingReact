import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <span className="icon">🌐</span> Business
        </div>

        {/* Navigation normal */}
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact Us</a>
        </nav>

        {/* Social Icons */}
        <div className="social">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <nav className="navHamburguer">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu"> ☰ </label>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Features</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;