import React from 'react';
import '../Assets/css/Dashboard.css';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import StatCard from '../components/dashboard/StatCard';
import RecentBookings from '../components/dashboard/RecentBookings';
import EventsChart from '../components/dashboard/EventsChart';

const Dashboard = () => {
  const stats = [
    { title: 'Total Events', value: 124, icon: 'icon-events', color: '#3498db' },
    { title: 'Total Bookings', value: 876, icon: 'icon-bookings', color: '#2ecc71' },
    { title: 'Active Users', value: 542, icon: 'icon-users', color: '#9b59b6' },
    { title: 'Revenue', value: '$12,345', icon: 'icon-revenue', color: '#f39c12' }
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-wrapper">
          <h1 className="page-title">Dashboard</h1>
          <div className="stat-cards">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          <div className="dashboard-row">
            <div className="chart-container">
              <EventsChart />
            </div>
            <div className="recent-bookings">
              <RecentBookings />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;