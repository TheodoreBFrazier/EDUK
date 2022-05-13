import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import NewUser from "./pages/NewUser.js"
import Navbar from "./Navbar.js";
import EditUser from "./pages/EditUser.js";

function App() {
  return (
    <Router>
      <Navbar/>
      <main>
        <Routes>
          <Route path='/users/new' element={<NewUser/>}/>
          <Route path='/users/edit' element={<EditUser/>}/>
        </Routes>
        
      </main>
    </Router>
  )
}

export default App;
