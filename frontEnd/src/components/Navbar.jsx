


import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import './css/Navbar.css';

function Navbar(props) {
  // Initialize Bootstrap components once the component is mounted
  useEffect(() => {
    // Bootstrap components initialization
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Feedbacks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Donation impact</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Donation
              </a>
              
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="hair" onClick={()=>{props.set("Hair")}}>Hair donation</a></li>
                <li><a className="dropdown-item" href="Blood"onClick={()=>{props.set("Blood")}}>Blood donation</a></li>
                <li><a className="dropdown-item" href="Clothes" onClick={()=>{props.set("Clothes")}}>Clothes</a></li>
                <li><a className="dropdown-item" href="Medicaments" onClick={()=>{props.set("Medicaments")}}>Medicaments</a></li>
            
            
              </ul>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
