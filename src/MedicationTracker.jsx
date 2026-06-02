import React, { useState } from 'react';

const MedicationTracker = () => {
  const [medication, setMedication] = useState('');
  const [list, setList] = useState([]);

  const addMedication = () => {
    setList([...list, medication]);
    setMedication('');
  };

  return (
    <div className="container mt-4">
      <h2>Medication Tracker</h2>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter Medicine"
        value={medication}
        onChange={(e) => setMedication(e.target.value)}
      />

      <button className="btn btn-success" onClick={addMedication}>
        Add
      </button>

      <ul className="list-group mt-3">
        {list.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationTracker;