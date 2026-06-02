import React, { useState } from 'react';

const VitalsLog = () => {
  const [patientName, setPatientName] = useState('');
  const [bp, setBp] = useState('');
  const [sugar, setSugar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vitals Saved Successfully');
  };

  return (
    <div className="card">
      <h2>Vitals Log</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Blood Pressure"
          value={bp}
          onChange={(e) => setBp(e.target.value)}
        />

        <input
          type="number"
          placeholder="Sugar Level"
          value={sugar}
          onChange={(e) => setSugar(e.target.value)}
        />

        <button type="submit">Save Vitals</button>
      </form>
    </div>
  );
};

export default VitalsLog;