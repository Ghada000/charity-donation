import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import './css/Navbar.css';
import Login from '../components/login';
import ProgressBar from '../components/progressbar'; // Import ProgressBar component

function Navbar(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false); // State to control ProgressBar visibility

  const handleLoginClick = () => {
    setShowLogin(true);
    console.log("clicked");
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    console.log("clicked");
  };

  // Function to toggle ProgressBar visibility
  const toggleProgressBar = (view) => {
    if (view === "MoneyDonation") {
      setShowProgressBar(true);
    } else {
      setShowProgressBar(false);
    }
  };

  return (
    <>
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
                <a className="nav-link" href="#" onClick={() => props.changeView("FAQ")}>FAQ</a>
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
                  <li><a className="dropdown-item" href="#" onClick={() => { props.changeView("Hair"); toggleProgressBar("Hair"); }}>Hair donation</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => { props.changeView("Blood"); toggleProgressBar("Blood"); }}>Blood donation</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => { props.changeView("Clothes"); toggleProgressBar("Clothes"); }}>Clothes</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => { props.changeView("Medicaments"); toggleProgressBar("Medicaments"); }}>Medicaments</a></li>
                  {/* Add a new button for money donation */}
                  <li><a className="dropdown-item" href="#" onClick={() => { props.changeView("MoneyDonation"); toggleProgressBar("MoneyDonation"); }}>Money donation</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <button className="btn btn-outline-primary ms-2" onClick={handleLoginClick} >Login</button>
          </div>
        </div>
      </nav>
      {showLogin && <Login handleClose={handleCloseLogin} />}
      {/* Render ProgressBar component only when showProgressBar state is true */}
      {showProgressBar && <ProgressBar />}
    </>
  );
}

export default Navbar;
