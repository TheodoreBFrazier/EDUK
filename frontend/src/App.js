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
//resources usage page
import ResourcesUsagePage from "./pages/ResourcesUsage";
import ShowResource from "./pages/ShowResource";
import UsersPortal from "./pages/UsersPortal";
import LogInUser from "./components/LogInUser";
<<<<<<< HEAD
import CreateMentor from "./components/CreateMentor";
import AllMentors from "./components/AllMentors";
=======
import NewMentor from "./pages/NewMentor";
import MentorsPage from "./pages/MentorsPage";
>>>>>>> 7e42f204353c48e37b327566088ef1f59d5580a6
import "bootstrap/dist/css/bootstrap.min.css";

// rescources pages
import HighschoolPage from "./pages/HighschoolPage";
import CollegePage from "./pages/CollegePage";
import ContinuedLearningPage from "./pages/ContinuedLearningPage";

//Shows a single resource
//import ShowResource from "./pages/ShowResource";
import CreateUser from "./components/CreateUser";

import Pendings from "./pages/Pendings";
import NewResource from "./pages/NewResource";
// import EditResource from "./pages/EditResource";
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
<<<<<<< HEAD
            <Route path="/resources/:resource_id" element={<ShowResource />} />
            {/* <Route path="/resources/:resource_id/edit" element={<EditResource />} /> */}
=======
            <Route path="/resources/:resource_id/" element={<ShowResource />} />
>>>>>>> 7e42f204353c48e37b327566088ef1f59d5580a6
            <Route path="/resources/create" element={<NewResource />} />
            <Route path="admin" element={<AdminPage />}>
              <Route path="Resources_Usage" element={<ResourcesUsagePage />} />
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
              path="/continuedlearning"
              element={<ContinuedLearningPage />}
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
