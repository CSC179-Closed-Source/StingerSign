import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from './Navbar';
import SignUp from './SignUp';
import About from './About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
