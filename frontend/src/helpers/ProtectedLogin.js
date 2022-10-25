import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedLogin({ user, children }) {
  return user ? (
    user.usertype === "ADMIN" ? (
      <Navigate to="/dashboard" />
    ) : (
      <Navigate to="/dashboard-user" />
    )
  ) : (
    children
  );
}

export default ProtectedLogin;
