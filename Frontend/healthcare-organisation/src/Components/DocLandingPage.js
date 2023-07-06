import React from "react";
import './DoctorLandingPage.css';
import { Link } from "react-router-dom";

function DoctorLandingPage() {
  return (
    <div className="doctor-landing-page d-flex flex-column golden-theme">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
       
        <div className="container">
          <Link className="navbar-brand golden-text" to="/dochome">HEALTHCARE HOSPITAL</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link golden-text" to="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>

      {/* Doctor Status */}
      <div className="doctor-status text-black text-center golden-text">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div>
            <h4>Your Approval Status:</h4>
            <h2 className="approval-status">Approved</h2>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default DoctorLandingPage;
