import React, { useEffect } from 'react';

const Notification = () => {
  useEffect(() => {
    setTimeout(() => {
      alert('Time to take medicine!');
    }, 5000);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Notifications Enabled</h2>
    </div>
  );
};

export default Notification;