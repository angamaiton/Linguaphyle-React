import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
    <div className="container">
      <Link className="navbar-brand" to="/">Linguaphyle</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Link className="nav-item nav-link" to="/">Home</Link>
        <Link className="nav-item nav-link" to="/languages">Languages</Link>
        <Link className="nav-item nav-link" to="/linguistics">Linguistics</Link>
      </div>
    </div>
  </nav>
);

export default Navigation;
