import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
//STYLING

import "./App.css";
import NavBar from "./components/NavBar";

// IMPORTING PAGES

import Home from "./pages/Home";
import ResourcesPage from "./pages/ResourcesPage";
import UserPortal from "./pages/UserPortal";
import About from "./pages/About";
import MentorsPage from "./pages/Mentors";

//Shows a single resource
import ShowResource from "./pages/ShowResource";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/resources" element={<ResourcesPage/>} />
          <Route path = "/resources/:id" element={<ShowResource/>} />
          <Route path = "/users" element={<UserPortal />} />
          <Route path = "/about" element={<About />} />
          <Route path = "/mentors" element={<MentorsPage />} />
          <Route path = "/users/create" element={<CreateUser />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
  }

export default App;
