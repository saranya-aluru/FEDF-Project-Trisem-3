import React from 'react';

const ExportPDF = () => {

  const handleExport = () => {
    window.print();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Export Report</h2>

      <button onClick={handleExport}>
        Export / Print Report
      </button>
    </div>
  );
};

export default ExportPDF;