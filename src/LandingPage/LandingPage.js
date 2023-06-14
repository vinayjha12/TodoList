import React from "react";
import "./LandingPage.css";
const Landingpage = () => {
  return (
    <div className="navbar">
    <div className="navbar-content">
      <div className="left-section">
        <h1>TodoList</h1>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <div className="right-section">
        <ul className="menu-items">
          <li>Features</li>
          <li>SignIn</li>
          <li>SignUp</li>
        </ul>
      </div>
    </div>
  </div>
  
  
  );
};
export default Landingpage;
