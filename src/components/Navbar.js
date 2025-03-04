import React, { useState } from 'react';
import './Navbar.css'; // Make sure the path to the CSS file is correct

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo">Home Decor Shop</h1>

        {/* Navbar Links */}
        <div className={`nav-links-container ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/products" className="nav-link">Products</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
            <li className="nav-link">
              <div className="dropdown">
                <span className="dropdown-toggle">More</span>
                <div className="dropdown-menu">
                  <a href="/blog" className="dropdown-item">Blog</a>
                  <a href="/services" className="dropdown-item">Services</a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-icon"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
