import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript
import './css/Navbar.css';
import Login from '../components/login';

function Navbar(props) {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    console.log("clicked");
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
    console.log("clicked");
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
                <a className="nav-link active" aria-current="page" href="#" onClick={() => props.changeView("home")}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => props.changeView("FAQ")}>FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => props.changeView("Feedback")}>Feedbacks</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"  onClick={() => props.changeView("ChildrenSituation")}>Children Situation</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Donation
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => props.changeView("Hair")}>Hair donation</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => props.changeView("Blood")}>Blood donation</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => props.changeView("Clothes")}>Clothes</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => props.changeView("Medicaments")}>Medicaments</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => props.changeView("Event List")}>Event List</a></li>
                </ul>
              </li>
            </ul>
            <button className="btn btn-outline-primary ms-2" onClick={handleLoginClick} >Login</button>
          </div>
        </div>
      </nav>
      {showLogin && <Login handleClose={handleCloseLogin} />}
    </>
  );
}

export default Navbar;
