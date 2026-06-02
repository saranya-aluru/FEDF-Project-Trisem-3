import React, { useEffect, useState } from "react";

import Profile from "./Profile";
import PortalRequests from "./PortalRequests";
import PatientHistory from "./PatientHistory";
import MedicationManager from "./MedicationManager";
import DoctorVitalsManager from "./DoctorVitalsManager";

function DoctorDashboard({ user, onLogout }) {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] =
    useState(null);

  useEffect(() => {
    const users =
      JSON.parse(localStorage.getItem("users")) ||
      [];

    const patientUsers = users.filter(
      (u) => u.role === "patient"
    );

    setPatients(patientUsers);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <h2>Healthcare Doctor Portal</h2>

        <div>
          <span>
            Dr. {user?.name}
          </span>

          <button
            style={{ marginLeft: "15px" }}
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="doctor-container">

        {/* LEFT SIDEBAR */}

        <div className="patient-sidebar">

          <h2>Patients</h2>

          {patients.length === 0 ? (
            <p>No Patients Found</p>
          ) : (
            patients.map((patient) => (
              <div
                key={patient.id}
                className="patient-item"
                onClick={() =>
                  setSelectedPatient(patient)
                }
              >
                {patient.name}
              </div>
            ))
          )}

          <PortalRequests
            currentDoctor={user}
          />
        </div>

        {/* MAIN CONTENT */}

        <div className="patient-details">

          {selectedPatient ? (
            <>
              <Profile
                user={selectedPatient}
              />

              <DoctorVitalsManager
                patientId={
                  selectedPatient.id
                }
              />

              <PatientHistory
                currentPatient={
                  selectedPatient
                }
              />

              <MedicationManager
                patientId={
                  selectedPatient.id
                }
              />
            </>
          ) : (
            <div className="card">
              <h2>Select a Patient</h2>

              <p>
                Choose a patient from
                the left panel to view
                records.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default DoctorDashboard;