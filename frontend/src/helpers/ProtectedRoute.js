import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, children }) {
  return user && user.usertype === "ADMIN" ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
