import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
//STYLING

import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
//AXIOS
import axios from "axios";
// IMPORTING PAGES

import Home from "./pages/Home";
import About from "./pages/About";
import ResourcesPage from "./pages/ResourcesPage";
import UserPortal from "./pages/UserPortal";
// import MentorsPage from "./pages/Mentors";
import ShowResource from "./pages/ShowResource";
import UsersPortal from "./pages/UsersPortal";
import LogInUser from "./components/LogInUser";
import NewMentor from "./pages/NewMentor";
import MentorsPage from "./pages/MentorsPage";
import "bootstrap/dist/css/bootstrap.min.css";

// rescources pages
import HighschoolPage from "./pages/HighschoolPage";
import CollegePage from "./pages/CollegePage";
import ContinueLearningPage from "./pages/ContinueLearningPage";

//Shows a single resource
//import ShowResource from "./pages/ShowResource";
import CreateUser from "./components/CreateUser";

import Pendings from "./pages/Pendings";
import NewResource from "./pages/NewResource";
import AdminPage from "./pages/AdminPage";

import Footer from "./components/Footer";
//API
const API = process.env.REACT_APP_API_URL;
function App() {
  //mentors info
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios
      .get(API + "/mentors")
      .then((response) => {
        const mentors = response.data.result.filter(
          (mentor) => mentor.is_verified
        );
        setMentors(mentors);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [logText, setLogText] = useState(
    localStorage.getItem("userId") ? "Log Out" : "Log In"
  );
  return (
    <div className="App">
      <Router>
        <NavBar logText={logText} setLogText={setLogText} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:resource_id" element={<ShowResource />} />
            <Route path="/resources/create" element={<NewResource />} />
            <Route path="admin" element={<AdminPage />}>
              <Route path="users" element={<UsersPortal />} />
              <Route path="pendings" element={<Pendings />} />
            </Route>

            <Route
              path="/users/login"
              element={<LogInUser setLogText={setLogText} mentors={mentors} />}
            />
            <Route path="/users/:uid/" element={<UserPortal />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/create" element={<CreateUser />} />
            <Route path="/highschool" element={<HighschoolPage />} />
            <Route path="/college" element={<CollegePage />} />
            <Route
              path="/continuelearning"
              element={<ContinueLearningPage />}
            />
            <Route
              path="/mentors"
              element={<MentorsPage mentors={mentors} />}
            />
            <Route path="/mentors/create" element={<NewMentor />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
