import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseMenu from "@material-ui/icons/Close";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/">
          <h1>Personal Webpage</h1>
        </a>
      </div>
      <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
          <a href="#profile-introduction">ABOUT ME</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="#profile-skills">SKILLS</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/signin">SIGN-IN</a>
        </li>
        <li className="option" onClick={closeMobileMenu}>
          <a href="/signup">SIGN-UP</a>
        </li>
      </ul>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <div className="menu-icon">
            <CloseMenu />
          </div>
        ) : (
          <div className="menu-icon">
            <MenuIcon />
          </div>
        )}
      </div>
      </div>
  );
}

export default Navbar;
