import React, { useEffect, useState } from 'react';

const ThresholdAlerts = () => {
  const [sugar, setSugar] = useState(0);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    if (sugar > 180) {
      setAlert('High Sugar Level Alert!');
    } else {
      setAlert('');
    }
  }, [sugar]);

  return (
    <div className="container mt-4">
      <h2>Threshold Alerts</h2>

      <input
        type="number"
        className="form-control"
        placeholder="Enter Sugar Level"
        onChange={(e) => setSugar(e.target.value)}
      />

      {alert && (
        <div className="alert alert-danger mt-3">
          {alert}
        </div>
      )}
    </div>
  );
};

export default ThresholdAlerts;