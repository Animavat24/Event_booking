import React from 'react';
import '../../Assets/css/StatCard.css';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card" style={{ borderBottomColor: color }}>
      <div className="stat-icon" style={{ backgroundColor: color }}>
        <i className={icon}></i>
      </div>
      <div className="stat-info">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default StatCard;