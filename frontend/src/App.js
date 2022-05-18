import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
//STYLING

import "./App.css";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

// IMPORTING PAGES

import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";
import UserPortal from "./pages/UserPortal";
import About from "./pages/About";

// rescources pages
import HighschoolPage from "./pages/HighschoolPage";
import CollegePage from "./pages/CollegePage";

//Shows a single resource
import ShowResource from "./pages/ShowResource";
import CreateUser from "./components/CreateUser";
import ContinueLearningPage from "./pages/ContinueLearningPage";
import LogInUser from "./components/LogInUser";

import CreateMentor from "./components/CreateMentor";

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
						<Route path="/users/create" element={<CreateUser />} />
						<Route path="/highschool" element={<HighschoolPage />} />
						<Route path="/college" element={<CollegePage />} />
						<Route
							path="/continuelearning"
							element={<ContinueLearningPage />}
						/>
						<Route path="/users/login" element={<LogInUser />} />
						<Route path="/mentors/create" element={<CreateMentor />} />
					</Routes>
				</main>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
