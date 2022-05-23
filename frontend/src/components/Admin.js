import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <div className="admin">
      <h1>Welcome EDUK Admin!</h1>
      <br />
      <div className="admin_nav">
       
          <Link to="/admin/pendings">Pending Lists</Link>
        
          <Link to="/admin/users">All Users</Link>
          
      </div>
      {/* <h1>Please update the mentor and resource status, thank you!</h1> */}
      <Outlet />
      <br />
      <br />
      <h2>Please update mentors and resources status, thank you!</h2>
    </div>
  );
}

export default Admin;
