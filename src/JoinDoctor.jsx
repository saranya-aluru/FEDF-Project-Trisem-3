import React, { useState, useEffect } from "react";

const JoinDoctor = ({ currentPatient }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    setDoctors(
      users.filter((u) => u.role === "doctor")
    );
  }, []);

  const sendRequest = (doctor) => {
    const requests =
      JSON.parse(
        localStorage.getItem("doctorRequests")
      ) || [];

    requests.push({
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      patientId: currentPatient.id,
      patientName: currentPatient.name,
      status: "pending",
    });

    localStorage.setItem(
      "doctorRequests",
      JSON.stringify(requests)
    );

    alert("Request Sent");
  };

  return (
    <div className="card">
      <h2>Choose Doctor</h2>

      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <h3>{doctor.name}</h3>

          <button
            onClick={() =>
              sendRequest(doctor)
            }
          >
            Send Request
          </button>
        </div>
      ))}
    </div>
  );
};

export default JoinDoctor;