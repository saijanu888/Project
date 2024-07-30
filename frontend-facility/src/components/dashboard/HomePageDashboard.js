// components/HomePageDashboard.js
import React from 'react';
import './HomePageDashboard.css';

const HomePageDashboard = () => {
    return (
    <div className="dashboard">
        <div className="dashboard">
  <h1>Welcome to the Dashboard</h1>
  <div className="columns-container">
    <div className="column">
      <h2>Manager</h2>
      <a href="http://localhost:3000/login" className="dashboard-link">Manager Login</a>
      <a href="http://localhost:3000/register-manager" className="dashboard-link">Register Manager</a>
    </div>
    <div className="column">
      <h2>Resident</h2>
      <a href="http://localhost:3001/login" className="dashboard-link">Resident Login</a>
      <a href="http://localhost:3000/approve-resident" className="dashboard-link">Approve Resident</a>
      <a href="http://localhost:3000/register-resident" className="dashboard-link">Register Resident</a>
    </div>
    <div className="column">
      <h2>Facility</h2>
      <a href="http://localhost:3000/create-facility" className="dashboard-link">Create Facility</a>
      <a href="http://localhost:3000/viewfacility" className="dashboard-link">View Facility</a>
    </div>
    <div className="column">
      <h2>Booking</h2>
      <a href="http://localhost:3000/book" className="dashboard-link">Book Facility</a>
      <a href="http://localhost:3000/viewbookings" className="dashboard-link">View Bookings</a>
    </div><br/><br/><br/><br/>
    <div className="column">
      <h2>Resident Dashboard</h2>
      <a href="http://localhost:3001" className="dashboard-link">Resident Dashboard</a>
    </div>
  </div>
</div>

        {/* <div className="link-container">
        <a href="http://localhost:3001" className="dashboard-link">Resident Dashboard</a>
        <a href="http://localhost:3000/login" className="dashboard-link">Manager Login</a>
        <a href="http://localhost:3001/login" className="dashboard-link">Resident Login</a>
        <a href="http://localhost:3000/register-manager" className="dashboard-link">Register Manager</a>
        <a href="http://localhost:3000/approve-resident" className="dashboard-link">Approve Resident</a>
        <a href="http://localhost:3000/create-facility" className="dashboard-link">Create Facility</a>
        <a href="http://localhost:3000/viewfacility" className="dashboard-link">View Facility</a>
        <a href="http://localhost:3000/viewresident" className="dashboard-link">View Resident</a>
        <a href="http://localhost:3000/book" className="dashboard-link">Book Facility</a>
        <a href="http://localhost:3000/viewbookings" className="dashboard-link">View Bookings</a>
        <a href="http://localhost:3000/register-resident" className="dashboard-link">Register Resident</a>
        </div> */}
        {/* <div className="link-container">
        <a href="http:/localhost:3001/" className="dashboard-link">Resident Dashboard</a>
        <Link to="/login" className="dashboard-link">Login</Link>
        <Link to="/manager-login" className="dashboard-link">Manager Login</Link>
        <Link to="/resident-login" className="dashboard-link">Resident Login</Link>
        <Link to="/register-manager" className="dashboard-link">Register Manager</Link>
        <Link to="/approve-resident" className="dashboard-link">Approve Resident</Link>
        <Link to="/create-facility" className="dashboard-link">Create Facility</Link>
        <Link to="/viewfacility" className="dashboard-link">View Facility</Link>
        <Link to="/viewresident" className="dashboard-link">View Resident</Link>
        <Link to="/viewbookings" className="dashboard-link">View Bookings</Link>
        <Link to="/register-resident" className="dashboard-link">Register Resident</Link>
    </div> */}
    </div>
    );
}

export default HomePageDashboard;
