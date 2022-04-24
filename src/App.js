/** @format */

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import SignUp from "./SignUp";

import Dashboard from "./Dashboard";
import Pdfviewer from "./Pdfviewer";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Pdfviewer" element={<Pdfviewer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
