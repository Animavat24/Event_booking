import React from 'react';
import '../Assets/css/Settings.css';

const Settings = () => {
  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <div className="settings-sections">
        <div className="settings-section">
          <h3>General Settings</h3>
          {/* Settings form would go here */}
        </div>
        <div className="settings-section">
          <h3>Account Settings</h3>
          {/* Account settings would go here */}
        </div>
      </div>
    </div>
  );
};

export default Settings;