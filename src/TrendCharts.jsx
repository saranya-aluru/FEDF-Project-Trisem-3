import React from 'react';

const TrendCharts = () => {

  const data = [
    { day: 'Mon', sugar: 120 },
    { day: 'Tue', sugar: 140 },
    { day: 'Wed', sugar: 110 },
    { day: 'Thu', sugar: 150 }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sugar Trend</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Day</th>
            <th>Sugar Level</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.sugar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendCharts;