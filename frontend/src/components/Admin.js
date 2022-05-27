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
        <Link to="/admin/resources_usage">Resources Usage</Link>
      </div>
      
      <Outlet />
    </div>
  );
}

export default Admin;
