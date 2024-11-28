import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";

const scrollTop = () => {
  scroll.scrollToTop();
}
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <div className="logo" onClick={() => scrollTop()}>
          <span className="icon">🌐</span> Business
        </div>

        {/* Navigation normal */}
        <nav className="nav">
          <Link
            to="aboutSection"
            offset={-60}
            spy={true}
            smooth={true}
            duration={500}
          >
            About Us
          </Link>
          <Link
            to="proyectSection"
            offset={-60}
            spy={true}
            smooth={true}
            duration={500}
          >
            Proyects
          </Link>
          <Link
            to="serviceSection"
            offset={-60}
            spy={true}
            smooth={true}
            duration={500}
          >
            Services
          </Link>
          <Link
            to="contactSection"
            offset={-60}
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact Us
          </Link>
        </nav>

        <nav className="navHamburguer">
          <input type="checkbox" id="menu" />
          <label htmlFor="menu"> ☰ </label>
          <ul>
            <li>
              <Link
                to="aboutSection"
                offset={-60}
                spy={true}
                smooth={true}
                duration={500}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="proyectSection"
                offset={-60}
                spy={true}
                smooth={true}
                duration={500}
              >
                Proyects
              </Link>
            </li>
            <li>
              <Link
                to="serviceSection"
                offset={-60}
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="contactSection"
                offset={-60}
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;