import React, { useState } from "react";

function VitalsLog({ currentPatient }) {
  const [bp, setBp] = useState("");
  const [sugar, setSugar] = useState("");
  const [pulse, setPulse] = useState("");

  const saveVitals = () => {
    const vitals =
      JSON.parse(
        localStorage.getItem("patientVitals")
      ) || [];

    vitals.push({
      id: Date.now(),
      patientId: currentPatient.id,
      bp,
      sugar,
      pulse,
      date:
        new Date().toLocaleString(),
    });

    localStorage.setItem(
      "patientVitals",
      JSON.stringify(vitals)
    );

    alert("Vitals Saved");

    setBp("");
    setSugar("");
    setPulse("");
  };

  return (
    <div className="card">
      <h2>Log Vitals</h2>

      <input
        type="text"
        placeholder="Blood Pressure"
        value={bp}
        onChange={(e) =>
          setBp(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Sugar Level"
        value={sugar}
        onChange={(e) =>
          setSugar(e.target.value)
        }
      />

      <input
        type="number"
        placeholder="Pulse Rate"
        value={pulse}
        onChange={(e) =>
          setPulse(e.target.value)
        }
      />

      <button onClick={saveVitals}>
        Save Vitals
      </button>
    </div>
  );
}

export default VitalsLog;