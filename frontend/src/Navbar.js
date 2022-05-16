import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to= '/users/new'>Register</Link>
                </li>
                <li>
                    <Link to ='/users/edit'>Edit</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;