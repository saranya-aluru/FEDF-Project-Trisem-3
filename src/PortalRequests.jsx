import React, { useEffect, useState } from "react";

const PortalRequests = ({ currentDoctor }) => {
  const [requests, setRequests] =
    useState([]);

  useEffect(() => {
    loadRequests();
  }, []);

  const loadRequests = () => {
    const allRequests =
      JSON.parse(
        localStorage.getItem("doctorRequests")
      ) || [];

    setRequests(
      allRequests.filter(
        (r) =>
          r.doctorId === currentDoctor.id &&
          r.status === "pending"
      )
    );
  };

  const approve = (id) => {
    let allRequests =
      JSON.parse(
        localStorage.getItem("doctorRequests")
      ) || [];

    allRequests = allRequests.map((r) =>
      r.id === id
        ? { ...r, status: "approved" }
        : r
    );

    localStorage.setItem(
      "doctorRequests",
      JSON.stringify(allRequests)
    );

    loadRequests();
  };

  const reject = (id) => {
    let allRequests =
      JSON.parse(
        localStorage.getItem("doctorRequests")
      ) || [];

    allRequests = allRequests.map((r) =>
      r.id === id
        ? { ...r, status: "rejected" }
        : r
    );

    localStorage.setItem(
      "doctorRequests",
      JSON.stringify(allRequests)
    );

    loadRequests();
  };

  return (
    <div className="card">
      <h2>Patient Requests</h2>

      {requests.map((r) => (
        <div key={r.id}>
          <p>{r.patientName}</p>

          <button
            onClick={() =>
              approve(r.id)
            }
          >
            Approve
          </button>

          <button
            onClick={() =>
              reject(r.id)
            }
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default PortalRequests;