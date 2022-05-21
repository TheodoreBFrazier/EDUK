import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
//STYLING

import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";

// IMPORTING PAGES

import Home from "./pages/Home";
import About from "./pages/About";
import ResourcesPage from "./pages/ResourcesPage";
import UserPortal from "./pages/UserPortal";
// import MentorsPage from "./pages/Mentors";
import ShowResource from "./pages/ShowResource";
import UsersPortal from "./pages/UsersPortal";
import LogInUser from "./components/LogInUser";
import CreateMentor from "./components/CreateMentor";
import AllMentors from "./components/AllMentors";
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

//import Footer from "./components/Footer";

function App() {
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
              element={<LogInUser setLogText={setLogText} />}
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
            <Route path="/mentors" element={<AllMentors />} />
            <Route path="/mentors/create" element={<CreateMentor />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
