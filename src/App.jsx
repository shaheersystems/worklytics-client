import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
