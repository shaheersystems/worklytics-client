import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <HeroSection />
    </div>
  );
}

export default App;
