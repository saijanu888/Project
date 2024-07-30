import React from "react";
import { Link } from "react-router-dom";

const FacilityDeletedMessage = () => {
 return (
  <div>
   <body class="d-flex align-items-center justify-content-center">
    <nav class="navbar navbar-expand-lg  fixed-top">
     <div class="container">
      <a class="navbar-brand " href="index.html">
       Apartment Facility
      </a>
      <button
       class="navbar-toggler"
       type="button"
       data-bs-toggle="offcanvas"
       data-bs-target="#offcanvasNavbar"
       aria-controls="offcanvasNavbar"
       aria-label="Toggle navigation"
      >
       <span class="navbar-toggler-icon"></span>
      </button>
      <div
       class="offcanvas offcanvas-end"
       tabindex="-1"
       id="offcanvasNavbar"
       aria-labelledby="offcanvasNavbarLabel"
      >
       <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
         Apartment Facility
        </h5>
        <button
         type="button"
         class="btn-close"
         data-bs-dismiss="offcanvas"
         aria-label="Close"
        ></button>
       </div>
       <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
         <li class="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">
           Home
          </Link>
         </li>
         <li class="nav-item">
          <Link
           to="/signupdashboard"
           className="nav-link active"
           aria-current="page"
          >
           SignIn
          </Link>
         </li>
        </ul>
       </div>
      </div>
     </div>
    </nav>

    <div class="container-fluid text-center d-flex align-items-center justify-content-center hero">
     <div class="row">
      <div class="col">
       <h1 class="">Facility Deleted Successfully..!</h1>
       <p>"Click the below button to Deleted more facilities."</p>
       <Link to="/create-facility">
        <a class="btn btn-dark">Delete Facility</a>
       </Link>
      </div>
     </div>
    </div>
   </body>
  </div>
 );
};

export default FacilityDeletedMessage;
