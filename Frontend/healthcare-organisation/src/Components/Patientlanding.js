import React from "react";
import "./PatientLandingPage.css";
import { Link } from "react-router-dom";

function PatientLandingPage() {
  return (
    <div className="Doc">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <Link className="navbar-brand nav-link" to="/PatientHome">
            HEALTHCARE HOSPITAL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="nav-link" to="/">
            Logout
          </Link>
        </div>
      </nav>

      {/* Content Section */}
      <section className="content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h3>Welcome!</h3>
              <Link className="btn btn-primary mt-3" to="/viewDoc">
                View Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PatientLandingPage;
