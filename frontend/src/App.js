import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";

import NavBar from "./components/NavBar";

// IMPORTING PAGES

import Home from "./pages/Home"
import Resources from "./pages/Resources";
import UserPortal from "./pages/UserPortal";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/resources" element={<Resources/>} />
          <Route path = "/users" element={<UserPortal />} />
          
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App;
