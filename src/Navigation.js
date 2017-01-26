import React from 'react';
import { Link } from 'react-router';
import './Navigation.css';

const Navigation = () => (
  <nav className="navbar navbar-toggleable-md navbar-inverse bg-darkred">
    <div className="container">
      <Link className="navbar-brand" to="/">Linguaphyle</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/languages">Languages</Link>
          <Link className="nav-item nav-link" to="/linguistics">Linguistics</Link>
          <Link className="nav-item nav-link" to="/etymology">Etymology</Link>
        </ul>
        <ul className="navbar-nav">
          <Link className="nav-item nav-link" to="/login">Log In</Link>
          <Link className="nav-item nav-link" to="/register">Sign Up</Link>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
