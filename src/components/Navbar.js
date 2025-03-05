import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import { useCart } from "../contexts/CartContext"; // Import Cart context
import "./Navbar.css"; // Make sure the path to the CSS file is correct

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart(); // Get cart count

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="navbar-logo">Home Decor Shop</h1>

        {/* Navbar Links */}
        <div className={`nav-links-container ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/products" className="nav-link">Products</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li className="nav-link">
              <div className="dropdown">
                <span className="dropdown-toggle">More</span>
                <div className="dropdown-menu">
                  <Link to="/blog" className="dropdown-item">Blog</Link>
                  <Link to="/services" className="dropdown-item">Services</Link>
                </div>
              </div>
            </li>
            {/* Cart Icon */}
            <li className="nav-link">
              <Link to="/cart" className="cart-link">
                🛒 Cart ({getCartCount()})
              </Link>
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
