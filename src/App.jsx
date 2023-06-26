import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import Dashboard from "./pages/Dashboard";
import { PublicRoutes } from "./routes/PublicRoutes";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import NewJob from "./pages/NewJob";
function App() {
  // const { user, login, logout } = useAuth();
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/' element={<ProtectedRoutes />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='new' element={<NewJob />} />
        </Route>
        <Route path='/' element={<PublicRoutes />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
