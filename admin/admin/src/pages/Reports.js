import React from 'react';
import '../Assets/css/Reports.css';

const Reports = () => {
  return (
    <div className="reports-page">
      <h2>Reports</h2>
      <div className="reports-container">
        {/* Report components would go here */}
        <div className="report-placeholder">
          Booking statistics report
        </div>
        <div className="report-placeholder">
          Revenue report
        </div>
      </div>
    </div>
  );
};

export default Reports;