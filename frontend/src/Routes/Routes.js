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
import Support from "../view/Support/Support";
import Disease from "../view/Disease/Disease";
import UserSettings from "../view/UserSettings/UserSettings";

function RouteGaurd() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard1" element={<UserDashboard />} />
        <Route path="/status" element={<Status />} />
        <Route path="/data" element={<Filter />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/support" element={<Support />} />
        <Route path="/details" element={<UserSettings />} />
      </Routes>
    </Router>
  );
}

export default RouteGaurd;
