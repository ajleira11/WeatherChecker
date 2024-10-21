import React, { useState } from "react";
import "./ToggleSwitch.css"; // Import the CSS file

const ToggleSwitch = ({ onChange }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle"
        onChange={onChange}
        className="toggle-input"
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
