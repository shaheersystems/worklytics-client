import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PublicRoutes = () => {
  const location = useLocation();
  console.log(location.pathname);
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to='/dashboard' /> : <Outlet />;
};
