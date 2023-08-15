import React, { useState } from "react";
import logo from "../../assets/PNG/KonnectxLogoWhite.png";
import NavLink from "../../Components/NavLink";
import "./header.scss";
import Link from "next/link";

const Header = ({ handleClickScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="nav-header">
        <Link href="/" className="logo">
          <img src={logo.src} alt="Logo Image" />
        </Link>
        <div
          className={`hamburger ${isOpen ? "toggle" : ""}`}
          onClick={handleToggle}
        >
          <div className="bars1"></div>
          <div className="bars2"></div>
          <div className="bars3"></div>
        </div>
        <ul
          onClick={handleToggle}
          className={`nav-links ${isOpen ? "open" : ""}`}
        >
          <li className={`fade1 ${isOpen ? "fade-in" : ""}`}>
            <NavLink activeClassName="active" href="/">
              Home
            </NavLink>
          </li>
          <li className={`fade1 ${isOpen ? "fade-in" : ""}`}>
            <NavLink activeClassName="active" href="/about-us">
              About us
            </NavLink>
          </li>
          <li className={`fade1 ${isOpen ? "fade-in" : ""}`}>
            <NavLink activeClassName="active" href="/packages">
              Packages
            </NavLink>
          </li>
          <li className={`fade1 ${isOpen ? "fade-in" : ""}`}>
            <NavLink activeClassName="active" href="/services">
              Services
            </NavLink>
          </li>
          <li className={`fade1 ${isOpen ? "fade-in" : ""}`}>
            <NavLink activeClassName="active" href="/blogs">
              Blog
            </NavLink>
          </li>
          {/* {
            !window?.location?.pathname?.includes("/blogs") && 
          <li onClick={handleClickScroll} className={`fade1 contact ${isOpen ? "fade-in" : ""}`}><a>Contact Us</a></li>
          } */}
          <li
            onClick={handleClickScroll}
            className={`fade1 contact ${isOpen ? "fade-in" : ""}`}
          >
            <a>Contact Us</a>
          </li>
        </ul>
        <a className="login-button" href="tel:+18663454585">
          (866) 345-4585
        </a>
      </nav>
    </>
  );
};

export default Header;
