import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedLogin({ user, children }) {
  return user ? <Navigate to="/dashboard" /> : children;
}

export default ProtectedLogin;
