import React from 'react';
import '../../Assets/css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle">
          <i className="icon-menu"></i>
        </button>
      </div>
      <div className="header-right">
        <div className="notification">
          <i className="icon-bell"></i>
          <span className="badge">3</span>
        </div>
        <div className="user-profile">
          <img src="/user-avatar.jpg" alt="User" />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;