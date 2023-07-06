import React, { useState, useEffect } from "react";
import './individualDoctors.css'

function IndividualDoctors(props) {
  const [doc, setDoc] = useState([props.user]);

  useEffect(() => {
    if (doc[0]) {
      localStorage.setItem("doctorId", doc[0].doctorId);
    }
  }, [doc]);

  const UpdateStatus = (doctorId, isApproved) => {
    const newStatus = isApproved === "Approved" ? "Disapproved" : "Approved";
  
    fetch("http://localhost:5184/api/Hospital/UpdateDoctorStatus", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({ doctorId, status: newStatus })
    })
      .then(async (response) => {
        if (response.status === 200) {
          const data = await response.json();
          setDoc([data]); // Update the doc state with the new data
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleDelete = (doctorId) => {
    fetch(`http://localhost:5184/api/Hospital/DeleteDoctor?id=${doctorId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(async (response) => {
        if (response.status === 200) {
          const deletedDoctor = await response.json();
          // Do something with the deleted doctor object if needed
          console.log("Doctor deleted:", deletedDoctor);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Doctor deleted!");
  };

  return (
    <div className="individual">
      <div className='d-flex align-items-center'>
        <div className='ms-3'>
          <table>
            <thead>
              <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Gender</th>
                <th scope='col'>Specialisation</th>
                <th scope='col'>Years of experience</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Address</th>
                <th scope='col'>Status</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>{doc[0].name}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{doc[0].gender}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{doc[0].speciality}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{doc[0].experience}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{doc[0].phone}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{doc[0].address}</p>
                </td>
                <td>
                  <p className='fw-normal mb-1'>{doc[0].isApproved}</p>
                </td>
                <td>
                  <button onClick={() => UpdateStatus(doc[0].doctorId, doc[0].isApproved)}
                    className="card-link btn btn-secondary">Change Status</button>
                  <br/><br></br>
                  <button onClick={() => handleDelete(doc[0].doctorId)}
                    className="card-link btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IndividualDoctors;
