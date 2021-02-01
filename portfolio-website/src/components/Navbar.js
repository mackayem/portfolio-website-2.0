import React from 'react';

function Navbar () {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="#">Emily Mackay</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about-section">About</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#education-section">Education</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#projects-section">Projects</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#contact-section">Contact</a>
            </li>
          </ul>
        </div>



      </nav>
    </div>
  )
};

export default Navbar;
