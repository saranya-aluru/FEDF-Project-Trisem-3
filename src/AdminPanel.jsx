import React from 'react';

const patients = [
  {
    id: 1,
    name: 'John Doe',
    condition: 'Diabetes'
  },
  {
    id: 2,
    name: 'Sarah',
    condition: 'Hypertension'
  }
];

const AdminPanel = () => {
  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Condition</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;