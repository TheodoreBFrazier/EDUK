import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../css/LogIn.css";
import { Link } from "react-router-dom";
import Error from "./Error";

const API = process.env.REACT_APP_API_URL;

function LogInUser({ setLogText, mentors }) {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    user_name: "",
    password: "",
  });
  //show error to user
  const [error, setError] = useState("");

  const logIn = () => {
    setError("");
    axios
      .post(`${API}/auth/login`, user)
      .then((res) => {
        const userInfo = res.data.result;
        const userId = userInfo.uid;
        if (!isNaN(userId)) {
          // console.log(userInfo);
          setError("");
          //set userId in localStorage
          localStorage.setItem("userId", `${userId}`);
          //set userInfo in localStage
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          if (userInfo.mentor_id) {
            const mentor = mentors.find(
              (el) => el.mentor_id === userInfo.mentor_id
            );
            localStorage.setItem("userMentor", JSON.stringify(mentor));
          }
          setLogText("Log Out");
          if (!userInfo.is_admin) navigate(`/users/${userId}`);
          if (userInfo.is_admin) navigate("/admin");
        }
      })
      .catch((c) => {
        if (c.response && c.response.data) {
          setError(c.response.data.error);
        }
      });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    logIn();
  };

  return (
    <div className="user-login-form">
      {error ? <Error error={error} /> : ""}
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login Here</h2>
        <input
          placeholder="Please Enter Username"
          type="text"
          id="user_name"
          onChange={handleChange}
          value={user.user_name}
        />
        <input
          placeholder="Please Enter Password"
          type="password"
          id="password"
          onChange={handleChange}
          value={user.password}
        />

        <button className="login-submit">Log In</button>
        <Link to="/users/create">
          <button className="sign-up-submit">New to EDUK? Sign up here!</button>
        </Link>
      </form>
    </div>
  );
}
export default LogInUser;
