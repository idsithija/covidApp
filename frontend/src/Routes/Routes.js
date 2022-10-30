import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
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
import ProtectedLogin from "../helpers/ProtectedLogin";
import ProtectedRoute from "../helpers/ProtectedRoute";
import { MainContext } from "../context/MainContext";
import UserProtectedRoute from "../helpers/UserProtectedRoute";
import UserDetails from "../view/UserDetails/UserDetails";

function RouteGaurd() {
  const { user } = useContext(MainContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedLogin user={user}>
              <SignIn />
            </ProtectedLogin>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedLogin user={user}>
              <SignUp />
            </ProtectedLogin>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard-user"
          element={
            <UserProtectedRoute user={user}>
              <UserDashboard />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/status"
          element={
            <UserProtectedRoute user={user}>
              <Status />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/data"
          element={
            <ProtectedRoute user={user}>
              <Filter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/data/:id"
          element={
            <ProtectedRoute user={user}>
              <UserDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/locations"
          element={
            <UserProtectedRoute user={user}>
              <Locations />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/disease"
          element={
            <ProtectedRoute user={user}>
              <Disease />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={user ? <AdminSettings /> : <Navigate to="/" />}
        />
        <Route
          path="/ticket"
          element={
            <ProtectedRoute user={user}>
              <Ticket />
            </ProtectedRoute>
          }
        />
        <Route
          path="/support"
          element={
            <UserProtectedRoute user={user}>
              <Support />
            </UserProtectedRoute>
          }
        />
        <Route
          path="/details"
          element={user ? <UserSettings /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default RouteGaurd;
