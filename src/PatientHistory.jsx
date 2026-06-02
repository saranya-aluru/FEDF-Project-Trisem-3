import React, { useEffect, useState } from "react";

const PatientHistory = ({
  currentPatient,
}) => {
  const [diagnoses, setDiagnoses] =
    useState([]);

  const [medications, setMedications] =
    useState([]);

  useEffect(() => {
    const d =
      JSON.parse(
        localStorage.getItem("diagnoses")
      ) || [];

    const m =
      JSON.parse(
        localStorage.getItem("medications")
      ) || [];

    setDiagnoses(
      d.filter(
        (x) =>
          x.patientId ===
          currentPatient.id
      )
    );

    setMedications(
      m.filter(
        (x) =>
          x.patientId ===
          currentPatient.id
      )
    );
  }, [currentPatient]);

  return (
    <div className="card">
      <h2>Medical History</h2>

      <h3>Diagnoses</h3>

      {diagnoses.map((d, i) => (
        <p key={i}>
          {d.date} - {d.diagnosis}
        </p>
      ))}

      <h3>Medications</h3>

      {medications.map((m, i) => (
        <p key={i}>
          {m.date} - {m.medicine}
        </p>
      ))}
    </div>
  );
};

export default PatientHistory;