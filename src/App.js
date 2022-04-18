/** @format */

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Signature from "./Signature";
import Contact from "./Contact";
import Dashboard from "./Dashboard";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					<Route path="/SignUp" element={<SignUp />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Signature" element={<Signature />} />
					<Route path="/Dashboard" element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
