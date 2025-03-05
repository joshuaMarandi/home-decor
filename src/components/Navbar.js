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
  
  const { cart } = useCart(); // Access cart

  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <Link to="/" className="text-lg font-bold">Home</Link>
      <Link to="/products" className="text-lg">Products</Link>
      <Link to="/cart" className="text-lg">
        Cart ({cart.length}) 🛒
      </Link>
    </nav>
  );
}

export default Navbar;
