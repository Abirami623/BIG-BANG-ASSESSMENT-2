import React, { useState } from "react";
import './Login.css';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userId: "",
    emailId: "",
    password: "",
    role: "",
    token: ""
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!user.userId) {
      errors.userId = "User ID is required";
      isValid = false;
    }

    if (!user.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    fetch("http://localhost:5184/api/Hospital/Login", {
      method: "POST",
      headers: {
        "Accept": "text/plain",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...user, user: {} })
    })
      .then(async (data) => {
        if (data.status === 200) {
          var myData = await data.json();
          localStorage.setItem("token", myData.token.toString());
          if (myData.role === "Admin") {
            localStorage.setItem("Admin Id", myData.userId.toString());
            navigate("/adminhome");
          } else if (myData.role === "Doctor") {
            localStorage.setItem("Doctor Id", myData.userId.toString());
            navigate("/docHome");
          } else if (myData.role === "Patient") {
            localStorage.setItem("Patient Id", myData.userId.toString());
            navigate("/patienthome");
          }
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="Login">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-white text-black">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-black-50 mb-5">Please enter your login and password!</p>

                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-3">
                        <label className="form-label text-start" htmlFor="userid">User ID</label>
                        <input
                          type="number"
                          id="userid"
                          className={`form-control form-control-lg ${errors.userId ? 'is-invalid' : ''}`}
                          placeholder="User ID"
                          onChange={(event) => {
                            setUser({ ...user, userId: event.target.value });
                          }}
                        />
                        {errors.userId && <div className="invalid-feedback">{errors.userId}</div>}
                      </div>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label text-start" htmlFor="typePasswordX">Password</label>
                        <input
                          type="password"
                          id="typePasswordX"
                          className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                          placeholder="Password"
                          onChange={(event) => {
                            setUser({ ...user, password: event.target.value });
                          }}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>

                      <button className="btn btn-outline-black btn-lg px-5" type="submit">Login</button>
                    </form>
                  </div>
                  <div>
                    <Link to="/docReg" className="text-black-50 fw-bold"><br />Sign up as a doctor</Link><br />
                    <Link to="/patientReg" className="text-black-50 fw-bold"><br />Sign up as a patient</Link><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
