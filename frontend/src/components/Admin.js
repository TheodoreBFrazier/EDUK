import React from "react";
import { Outlet, Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <h1>administrator Page</h1>
      <nav>
        <Link to="/admin/pendings">Pendings</Link>
        <Link to="/admin/users">users</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Admin;
