// import { Link, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

import { useState } from "react";
import "./Header.scss";

import logo from "../../Assets/logo-dark.png";

export const Header = () => {
  const [header, setHeader] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const [hamburger, setHamburger] = useState("hamburger");
  const [navMenu, setNavMenu] = useState("nav-menu");

  const open = () => {
    setIsOpened(!isOpened);
    if (isOpened) {
      setHamburger("hamburger active");
      setNavMenu("nav-menu active");
    } else {
      setHamburger("hamburger");
      setNavMenu("nav-menu");
    }
  };

  const close = () => {
    setHamburger("hamburger");
    setNavMenu("nav-menu");
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div id={header ? "Active" : "Header"}>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul className={navMenu}>
        <li className="nav-item">
          <Link
            to="home"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="tech"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            SERVICES
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="projects"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="about"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            PRICING
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            TEAM
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contact"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            CONTACT US
          </Link>
        </li>
      </ul>
      <div className={hamburger} onClick={open}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};
