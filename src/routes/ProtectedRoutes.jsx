import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }

  return <Outlet />;
};
