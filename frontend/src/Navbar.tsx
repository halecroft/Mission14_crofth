import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; //BrowserRouter and Route aren't used, but the tutorial said to bring them in, so I'm following that.

function Navbar() {
  //Navigation is styled using bootstrap's navbar
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1 mb-2">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/podcasts" className="nav-link">
            My Podcasts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/movielist" className="nav-link">
            Movie List
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
