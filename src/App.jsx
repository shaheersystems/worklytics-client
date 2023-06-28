import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import { PublicRoutes } from "./routes/PublicRoutes";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
// import { useLocation } from 'react-router-dom';
import SignupPage from "./pages/SignupPage";
import "./App.css";
import NewJob from "./pages/NewJob";
import JobListing from "./pages/JobListing";
import Header from "./components/Header";
import DashboardNavigation from "./components/DashboardNavigation";
import { useAuth } from "./context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Job Listing", href: "/jobs", current: false },
  { name: "Applications", href: "/applications", current: false },
  { name: "Questions", href: "/questions", current: false },
];

function App() {
  const { isLoggedIn } = useAuth();
  const history = useLocation();

  console.log(history.pathname, "here");

  return (
    <div className='App'>
      {history.pathname === "/login" || history.pathname === "/signup" ? (
        ""
      ) : isLoggedIn === true ? (
        <DashboardNavigation navigation={navigation} />
      ) : (
        <Header />
      )}
      <Routes>
        <Route path='/' element={<PublicRoutes />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
          <Route path='/' element={<LandingPage />} exact />
        </Route>
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='new' element={<NewJob />} />
          <Route path='jobs' element={<JobListing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
