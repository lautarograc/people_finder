import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const goBack = () => {
    navigate(-1);
  }

  return (
    <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
      <div className="container-fluid">
        <Link to="#" onClick={goBack}>
          <span className="navbar-brand">Back</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarsExample01"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarsExample01">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/log-in">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/log-out">Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;