
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './css/Navbar.css';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href='#' className='navbar-brand text-light'>Logo</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className='nav-item'><a href='#' className='nav-link'>Home</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>Donation</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>Impact Donation</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;




