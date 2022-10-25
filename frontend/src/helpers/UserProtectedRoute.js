import React from "react";
import { Navigate } from "react-router-dom";

function UserProtectedRoute({ user, children }) {
  return user && user.usertype !== "ADMIN" ? children : <Navigate to="/" />;
}

export default UserProtectedRoute;
