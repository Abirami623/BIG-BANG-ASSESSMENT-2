import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Patientregister() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    patientId: 0,
    name: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    healthIssue: "",
    users: {
      userId: 0,
      emailId: "",
      role: "",
      passwordHash: "",
      passwordKey: "",
    },
    passwordClear: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (patient.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (patient.dateOfBirth.trim() === "") {
      newErrors.dateOfBirth = "Date of Birth is required";
      isValid = false;
    }

    if (patient.gender.trim() === "") {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    if (patient.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (patient.phone.trim() === "") {
      newErrors.phone = "Phone is required";
      isValid = false;
    }

    if (patient.address.trim() === "") {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (patient.healthIssue.trim() === "") {
      newErrors.healthIssue = "Health Issue is required";
      isValid = false;
    }

    if (patient.passwordClear.trim() === "") {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const registerPatient = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5184/api/Hospital/RegisterPatient",
        {
          method: "POST",
          headers: {
            accept: "text/plain",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...patient,
            patient: {},
          }),
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem("token", data.token.toString());
        localStorage.setItem("Patient Id", data.userId);
        navigate("/patienthome");
      } else {
        console.log("Error registering patient");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                  Patient Registration Form
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="Name"
                          className={`form-control form-control-md ${
                            errors.name ? "is-invalid" : ""
                          }`}
                          placeholder="Name"
                          value={patient.name}
                          onChange={(event) =>
                            setPatient({ ...patient, name: event.target.value })
                          }
                        />
                        {errors.name && (
                          <div className="invalid-feedback">{errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="healthIssue"
                          className={`form-control form-control-md ${
                            errors.healthIssue ? "is-invalid" : ""
                          }`}
                          placeholder="Health issue"
                          value={patient.healthIssue}
                          onChange={(event) =>
                            setPatient({
                              ...patient,
                              healthIssue: event.target.value,
                            })
                          }
                        />
                        {errors.healthIssue && (
                          <div className="invalid-feedback">
                            {errors.healthIssue}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="date"
                          id="dateOfBirth"
                          className={`form-control form-control-md ${
                            errors.dateOfBirth ? "is-invalid" : ""
                          }`}
                          placeholder="Date of Birth"
                          value={patient.dateOfBirth}
                          onChange={(event) =>
                            setPatient({
                              ...patient,
                              dateOfBirth: event.target.value,
                            })
                          }
                        />
                        {errors.dateOfBirth && (
                          <div className="invalid-feedback">
                            {errors.dateOfBirth}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="femaleGender"
                          value="Female"
                          checked={patient.gender === "Female"}
                          onChange={(event) =>
                            setPatient({
                              ...patient,
                              gender: event.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="femaleGender"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="maleGender"
                          value="Male"
                          checked={patient.gender === "Male"}
                          onChange={(event) =>
                            setPatient({
                              ...patient,
                              gender: event.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="maleGender"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="otherGender"
                          value="Other"
                          checked={patient.gender === "Other"}
                          onChange={(event) =>
                            setPatient({
                              ...patient,
                              gender: event.target.value,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="otherGender"
                        >
                          Other
                        </label>
                      </div>
                      {errors.gender && (
                        <div className="invalid-feedback">{errors.gender}</div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="email"
                          className={`form-control form-control-md ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          placeholder="Email"
                          value={patient.email}
                          onChange={(event) =>
                            setPatient({ ...patient, email: event.target.value })
                          }
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="tel"
                          id="phone"
                          className={`form-control form-control-md ${
                            errors.phone ? "is-invalid" : ""
                          }`}
                          placeholder="Phone"
                          value={patient.phone}
                          onChange={(event) =>
                            setPatient({ ...patient, phone: event.target.value })
                          }
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone}</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="address"
                          className={`form-control form-control-md ${
                            errors.address ? "is-invalid" : ""
                          }`}
                          placeholder="Address"
                          value={patient.address}
                          onChange={(event) =>
                            setPatient({
                              ...patient,
                              address: event.target.value,
                            })
                          }
                        />
                        {errors.address && (
                          <div className="invalid-feedback">
                            {errors.address}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="password"
                          className={`form-control form-control-md ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          placeholder="Password"
                          value={patient.passwordClear}
                          onChange={(event) =>
                            setPatient({
                              ...patient,
                              passwordClear: event.target.value,
                            })
                          }
                        />
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-md"
                      type="submit"
                      onClick={registerPatient}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Patientregister;
