import React from "react";
import Admin from "../components/Admin";
import Home from "../pages/Home";

function AdminPage() {
	const isAdmin = JSON.parse(localStorage.getItem("userInfo.is_admin"));

	return <div>{isAdmin ? <Admin /> : <Home />}</div>;
}

export default AdminPage;
