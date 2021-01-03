import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseMenu from "@material-ui/icons/Close";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="header-top">
          <a href="/">
            <h1>Personal Webpage</h1>
          </a>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/">HOME</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/account">ACCOUNT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/signin">SIGN-IN</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="/signup">SIGN-UP</a>
          </li>
        </ul>
      </div>

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
