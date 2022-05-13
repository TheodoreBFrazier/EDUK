import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import NewUser from "./pages/NewUser.js"
import Navbar from "./Navbar.js";
import EditUser from "./pages/EditUser.js";

import NavBar from "./components/NavBar";

// IMPORTING PAGES

import Home from "./pages/Home"
import ResourcesPage from "./pages/ResourcesPage";
import UserPortal from "./pages/UserPortal";


//Shows a single resource
import ShowResource from "./pages/ShowResource"

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
          <Route path='/users/new' element={<NewUser/>}/>
          <Route path='/users/edit' element={<EditUser/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
