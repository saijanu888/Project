import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/signupdashboard.css";

const SignupDashboard = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">Apartment Facility</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Apartment Facility</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signupdashboard" className="nav-link active" aria-current="page">SignIn</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5 d-flex align-items-center justify-content-center hero">
        <div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Create Resident</h5>
                <p className="card-text">Click here to register.</p>
                <Link to="/register-resident" className="btn btn-dark">Sign up</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Create Manager</h5>
                <p className="card-text">Click here to register.</p>
                <Link to="/register-manager" className="btn btn-dark">Sign up</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Manager Login</h5>
                <p className="card-text">Click here to login to manager account.</p>
                <Link to="/manager/login" className="btn btn-dark">Login</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Resident Login</h5>
                <p className="card-text">Click here to login to Resident account.</p>
                <Link to="/resident/login" className="btn btn-dark">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupDashboard;
