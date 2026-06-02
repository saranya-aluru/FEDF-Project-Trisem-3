import React from "react";

import Profile from "./Profile";
import JoinDoctor from "./JoinDoctor";
import VitalsLog from "./VitalsLog";
import PatientHistory from "./PatientHistory";

function PatientDashboard({
  user,
  onLogout,
}) {
  return (
    <div>

      <nav className="navbar">
        <h2>Healthcare Patient Portal</h2>

        <div>
          <span>
            {user?.name}
          </span>

          <button
            style={{ marginLeft: "15px" }}
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      </nav>

      <div
        style={{
          padding: "20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        {/* PROFILE */}

        <Profile user={user} />

        {/* JOIN DOCTOR */}

        <JoinDoctor
          currentPatient={user}
        />

        {/* LOG VITALS */}

        <VitalsLog
          currentPatient={user}
        />

        {/* HISTORY */}

        <PatientHistory
          currentPatient={user}
        />

      </div>

    </div>
  );
}

export default PatientDashboard;