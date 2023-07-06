import React from "react";
import "./AdminLandingPage.css";
import { Link } from "react-router-dom";

function AdminLandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/adminhome">
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Content Section */}
      <section className="content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h2>Welcome, Admin!</h2>
              <Link className="btn btn-primary mt-3" to="/admanagedoc">
                Manage Doctors
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminLandingPage;
