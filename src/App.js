import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from './Navbar';
import SignUp from './SignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/About" element={<About />} />
          <Route  path="/SignUp" element={<SignUp />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
