import React, { useState } from "react";

const MedicationManager = ({
  patientId,
}) => {
  const [medicine, setMedicine] =
    useState("");

  const saveMedicine = () => {
    const medications =
      JSON.parse(
        localStorage.getItem("medications")
      ) || [];

    medications.push({
      patientId,
      medicine,
      date: new Date().toLocaleDateString(),
    });

    localStorage.setItem(
      "medications",
      JSON.stringify(medications)
    );

    setMedicine("");

    alert("Medication Added");
  };

  return (
    <div className="card">
      <h2>Add Medication</h2>

      <input
        value={medicine}
        onChange={(e) =>
          setMedicine(e.target.value)
        }
      />

      <button
        onClick={saveMedicine}
      >
        Add
      </button>
    </div>
  );
};

export default MedicationManager;