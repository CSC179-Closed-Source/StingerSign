/** @format */

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import SignUp from "./SignUp";

import Dashboard from "./Dashboard";
import Pdfviewer from "./pdfviewer";
import Login from "./Login";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserProfile" element={<UserProfile />}/>

          <Route path="/Pdfviewer" element={<Pdfviewer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
