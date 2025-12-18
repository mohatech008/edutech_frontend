import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import WelcomeScreen from "./Pages/WelcomeScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* The Landing Page */}
        <Route path="/" element={<Home />} />

        {/* The Registration Page */}
        <Route path="/register" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
