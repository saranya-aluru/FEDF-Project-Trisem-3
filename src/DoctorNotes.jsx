import React, { useState } from 'react';

const DoctorNotes = () => {
  const [notes, setNotes] = useState('');

  const saveNotes = () => {
    localStorage.setItem('doctorNotes', notes);
    alert('Notes Saved');
  };

  return (
    <div className="container mt-4">
      <h2>Doctor Notes</h2>

      <textarea
        rows="6"
        className="form-control"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <button className="btn btn-primary mt-3" onClick={saveNotes}>
        Save Notes
      </button>
    </div>
  );
};

export default DoctorNotes;