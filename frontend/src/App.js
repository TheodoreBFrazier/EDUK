import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
//STYLING

import "./App.css";

//Material UI

import Button from "@material-ui/core/Button";

import NavBar from "./components/NavBar";

// IMPORTING PAGES

import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";
import UserPortal from "./pages/UserPortal";
import About from "./pages/About";

//Shows a single resource
import ShowResource from "./pages/ShowResource";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/resources" element={<ResourcesPage />} />
						<Route path="/resources/:id" element={<ShowResource />} />
						<Route path="/users" element={<UserPortal />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</main>
			</Router>
		</div>
	);
}

export default App;
