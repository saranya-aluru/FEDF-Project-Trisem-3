import React, { useState } from "react";

const PatientLogin = ({ onLogin }) => {
  const [password, setPassword] = useState("");

  const patientPassword = "patient123";

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === patientPassword) {
      localStorage.setItem("patientLoggedIn", "true");
      onLogin();
    } else {
      alert("Incorrect Patient Password");
    }
  };

  return (
    <div className="login-card">
      <h2>Patient Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Patient Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default PatientLogin;