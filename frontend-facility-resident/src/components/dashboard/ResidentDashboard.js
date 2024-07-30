// src/components/ResidentDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ResidentDashboard.css';

const ResidentDashboard = () => {
  return (
    <div className="dashboard">
      <h1>Resident Dashboard</h1>
      <div className="link-container">
        <Link to="/register-resident" className="dashboard-link">Register Resident</Link>
        <Link to="/login" className="dashboard-link">Login</Link>
        <Link to="/viewresident" className="dashboard-link">View Resident</Link>
        <Link to="/bookfacility" className="dashboard-link">Book Facility</Link>
        <Link to="/viewfacility" className="dashboard-link">View Facility</Link>
      </div>
    </div>
  );
}

export default ResidentDashboard;
