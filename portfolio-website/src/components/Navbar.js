import React from 'react';

function Navbar () {
  return (
    // <div className="Navbar">
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <a className="navbar-brand" href="#">Emily Mackay</a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about-section">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#education-section">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects-section">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact-section">Contact</a>
          </li>
        </ul>



      </nav>
    // </div>
  )
};

export default Navbar;
