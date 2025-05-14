import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/Header.css';
// import logo from './logo.png'; // Import your logo here

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Left side - Logo and Navigation */}
          <div className="header-left">
            <div className="logo-container">
              <Link to="/">
                {/* <img src={logo} alt="Logo" className="logo" /> */}
              </Link>
            </div>
            <nav className="navbar">
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="#">Event List</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>

          {/* Right side - Login button and hamburger icon */}
          <div className="header-right">
            <button className="login-button">Login</button>
            <div className="hamburger" onClick={toggleSidebar}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          {/* <img src={logo} alt="Logo" className="sidebar-logo" /> */}
          <div className="sidebar-close" onClick={toggleSidebar}>×</div>
        </div>
        <nav className="sidebar-nav">
          <ul className="sidebar-links">
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/events" onClick={toggleSidebar}>Event List</Link></li>
            <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
            <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
            <li className="sidebar-login"><Link to="/login" onClick={toggleSidebar}>Login</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Header;
