//importing Link function

import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navigation">
            <Link to="/">
                <h3> NYC Rose 🌹</h3>
            </Link>
            <Link to="/resources">
                <h3> Resources 🌹</h3>
            </Link>
            <button>
              <Link to = "/users"> User Portal</Link>
            </button>
        </nav>
    )
}