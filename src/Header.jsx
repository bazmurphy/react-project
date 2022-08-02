import React from "react";
import reactLogo from "./assets/react-logo.svg";

function Header() {
  return (
    <header>
      <nav className="nav-container">
        <img className="nav-logo" src={reactLogo} alt="" />
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;