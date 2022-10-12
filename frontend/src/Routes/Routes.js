import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "../view/Dashboards/AdminDashboard";
import UserDashboard from "../view/Dashboards/UserDashboard";
import Filter from "../view/Filter/Filter";
import AdminSettings from "../view/Settings/AdminSettings";
import Ticket from "../view/Ticket/Ticket";

function RouteGaurd() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/dashboard-1" element={<UserDashboard />} />
        <Route path="/data" element={<Filter />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default RouteGaurd;
