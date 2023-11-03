import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light header-styling">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://diksha.gov.in/"><img src="https://diksha.gov.in/jadoo/assets/img/logo.png" alt="" className="header-logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/language">Language</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/age">Age Group</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/card">Cards</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bhashini">Bhashini Translator</Link>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Header;
