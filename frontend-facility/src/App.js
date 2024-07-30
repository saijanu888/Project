import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import FacilityForm from './components/facility/FacilityForm';
// import FacilityGrid from './components/facility/FacilityGrid';
// import LoginPage from './components/login/LoginPage';
// import ManagerRegistrationForm from './components/manager/ManagerRegistrationForm';
// import ResidentGrid from './components/Resident/ResidentGrid';
// import ResidentRegistrationForm from './components/Resident/ResidentRegistrationForm';
// import Home from './components/home page/Home';

import BookingForm from './components/booking/BookingForm.js';
import BookingGrid from './components/booking/BookingGrid.js';
import Managerview from "./components/dashboard/ManagerView.js";
import FacilityForm from "./components/facility/FacilityForm";
import FacilityGrid from "./components/facility/FacilityGrid";
import Home from "./components/home page/Home.js";
import SignupDashboard from "./components/home page/SignupDashboard";
import LoginPage from "./components/login/LoginPage";
import ManagerLogin from "./components/login/ManagerLogin";
import ResidentLogin from "./components/login/ResidentLogin";
import ManagerRegistrationForm from "./components/manager/ManagerRegistrationForm";
import UpdateManager from './components/manager/UpdateManager.js';
import FacilityCreationMessage from "./components/messages/FacilityCreationMessage";
import FacilityDeletedMessage from "./components/messages/FacilityDeletedMessage";
import FacilityUpdateMessage from "./components/messages/FacilityUpdateMessage";
import ResidentCreationMessage from "./components/messages/ResidentCreationMessage";
import ResidentUpdateMessage from "./components/messages/ResidentUpdateMessage";
import ResidentGrid from "./components/Resident/ResidentGrid";
import ResidentRegistrationForm from "./components/Resident/ResidentRegistrationForm";
import { default as ResidantTable, default as ResidentTable } from "./components/Resident/ResidentTable.js";

function App() {

  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/signupdashboard" Component={SignupDashboard} />
      <Route path="/managerview" Component={Managerview} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/manager/login" Component={ManagerLogin} />
      <Route path="/update-manager" Component={UpdateManager} />
      <Route path="/resident/login" Component={ResidentLogin} />
      <Route path="/register-manager" Component={ManagerRegistrationForm} />
      <Route path="/approve-resident" Component={ResidentTable} />
      <Route path="/create-facility" Component={FacilityForm} />
      <Route path="/create-booking" Component={BookingForm} />
      <Route path="/viewfacility" Component={FacilityGrid} />
      <Route path="/viewresident" Component={ResidentGrid} />
      <Route path="/view-booking" Component={BookingGrid} />
      <Route path="/register-resident" Component={ResidentRegistrationForm} />
      <Route path="/residenttable" Component={ResidantTable} />
      <Route path="/facilitycreationmessage" Component={FacilityCreationMessage} />
      <Route path="/facilityupdatemessage" Component={FacilityUpdateMessage} />
      <Route path="/facilitydeletedmessage" Component={FacilityDeletedMessage} />
      <Route path="/residentcreationmessage" Component={ResidentCreationMessage} />
      <Route path="/residentupdatemessage" Component={ResidentUpdateMessage} />

      {/* <Route path="/" Component={HomePageDashboard} />
            <Route path= "/login" Component={LoginPage} />
            <Route path="/register-manager" Component={ManagerRegistrationForm} />
            <Route path="/register-resident" Component={ResidentRegistrationForm} />
            <Route path="/approve-resident" Component={ResidentGrid} />
            <Route path="/create-facility" Component={FacilityForm} />
            <Route path="/viewfacility" Component={FacilityGrid} />
            <Route path="/viewresident" Component={ResidentGrid} />
            <Route path="/book" Component={BookingForm} />
            <Route path="/viewbookings" Component={BookingGrid} />
            <Route path="/register-resident" Component={ResidentRegistrationForm} /> */}
    </Routes>
  );
};

export default App;
