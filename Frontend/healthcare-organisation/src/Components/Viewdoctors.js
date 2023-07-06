import React, { useState, useEffect } from "react";
import "./ViewDotors.css";
import { Link } from "react-router-dom";

function PatientViewDoctors() {
  var logOut = () => {
    localStorage.clear();
  };
  const [doctors, setDoctors] = useState([]);

  const getDocSpec = () => {
    fetch("http://localhost:5184/api/Hospital/GetDocSpec", {
      method: "GET",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const myData = await response.json();
        console.log(myData);
        //const approvedDoctors = myData.filter((doc) => doc.isApproved === "Approved");
        setDoctors(myData);
        console.log(doctors);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="patient-view-doctors">
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/viewDoc">
                  View Doctors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logOut}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Doctor List */}
      <button className="btn btn-primary mt-3" onClick={getDocSpec}>
        View Doctors
      </button>

      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Specialisation</th>
            <th scope="col">Years of experience</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((val, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{val.name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{val.gender}</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">{val.speciality}</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">{val.experience}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PatientViewDoctors;
