import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   
   < body className="d-flex align-items-center justify-content-center">
    <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container">
          <a className="navbar-brand " href="index.html">Apartment Facility</a>
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

      <div className="container-fluid text-center d-flex align-items-center justify-content-center hero">
        <div className="row">
          <div className="col">
            <h1 className="">Harmony in every beat awaits</h1>
            <p>"Secure your dream home in our exclusive apartment community today!"</p>
            <Link to="/signupdashboard"><a className="btn btn-dark" >Signup</a></Link>
          </div>
        </div>
      </div>
      </body>

  )
}

export default Home;