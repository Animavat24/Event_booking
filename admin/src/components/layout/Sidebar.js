import React from 'react';
import '../../Assets/css/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.svg" alt="Event Booking Admin" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/dashboard"><i className="icon-dashboard"></i> Dashboard</Link></li>
          <li><Link to="/events"><i className="icon-events"></i> Events</Link></li>
          <li><Link to="/bookings"><i className="icon-bookings"></i> Bookings</Link></li>
          <li><Link to="/users"><i className="icon-users"></i> Users</Link></li>
          <li><Link to="/calendar"><i className="icon-calendar"></i> Calendar</Link></li>
          <li><Link to="/reports"><i className="icon-reports"></i> Reports</Link></li>
          <li><Link to="/settings"><i className="icon-settings"></i> Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;