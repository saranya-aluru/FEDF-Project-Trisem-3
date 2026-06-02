import React from 'react';

const historyData = [
  {
    date: '2026-05-20',
    bp: '120/80',
    sugar: 130
  },
  {
    date: '2026-05-21',
    bp: '130/90',
    sugar: 160
  }
];

const History = () => {
  return (
    <div className="container mt-4">
      <h2>Patient History</h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>BP</th>
            <th>Sugar</th>
          </tr>
        </thead>

        <tbody>
          {historyData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.bp}</td>
              <td>{item.sugar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;