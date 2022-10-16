import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "../view/Dashboards/AdminDashboard";
import UserDashboard from "../view/Dashboards/UserDashboard";
import Filter from "../view/Filter/Filter";
import AdminSettings from "../view/Settings/AdminSettings";
import Ticket from "../view/Ticket/Ticket";
import SignIn from "../view/SignIn/SignIn";
import SignUp from "../view/SignUp/SignUp";
import Status from "../view/Status/Status";
import Locations from "../view/Locations/Locations";

function RouteGaurd() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard-1" element={<UserDashboard />} />
        <Route path="/status" element={<Status />} />
        <Route path="/data" element={<Filter />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default RouteGaurd;
