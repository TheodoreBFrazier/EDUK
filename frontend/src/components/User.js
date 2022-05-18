//user component
import { Link } from "react-router-dom";

function User({ user }) {
  return (
    <div>
      <div>User number: {user.uid}</div>
      <div>User Age: {user.age}</div>
      <Link to={`users/${user.uid}`}>See User Details</Link>
    </div>
  );
}

export default User;
