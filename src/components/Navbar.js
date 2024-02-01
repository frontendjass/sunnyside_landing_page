import React, { useState } from 'react';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState('active');

  function handleBurgerMenu() {
    setActiveMenu((prevActiveMenu) =>
      prevActiveMenu === 'active' ? '' : 'active'
    );
  }

  return (
    <div className="navbar" id="main-navbar">
      <header>
        <span className="navbar-logo">sunnyside</span>
        <nav className={`navbar-menu ${activeMenu}`} id="navbar-menu">
          <ul className="navbar-list-container">
            <li className="navbar-item">
              <a href="#about">About</a>
            </li>
            <li className="navbar-item">
              <a href="#services">Services</a>
            </li>
            <li className="navbar-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="navbar-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div
          className={`navbar-burger-menu`}
          id="navbar-burger-menu"
          onClick={handleBurgerMenu}
        >
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
