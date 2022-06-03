import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "../css/CreateUser.css";
import GeneralShowMessage from "./GeneralShowMessage";

const API = process.env.REACT_APP_API_URL;

function CreateUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    user_name: "",
    password: "",
  });
  const [error, setError] = useState("");

  const addUser = () => {
    setError("");
    axios
      .post(`${API}/auth/sign_up`, user)
      .then(() => {
        navigate(`/users/login`);
      })
      .catch((c) => {
        if (c.response) setError(c.response.data.error);
      });
  };

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

  return (
    <div>
      {error ? <GeneralShowMessage severity="error" message={error} /> : ""}
      <form className="create-user-form" onSubmit={handleSubmit}>
        <div className="title">Welcome to EDUK!</div>
        {/* <h2 className="subtitle">Let's create your account!</h2> */}

        <div className="subtitle">Let's create your account!</div>
        <div className="subtitle-2">
          {" "}
          Already signed Up? <Link to="/users/login">Login Here!</Link>
        </div>

        <label htmlFor="first_name">{/* First name */}</label>
        <input
          id="first_name"
          className="input"
          type="text"
          placeholder="First Name"
          value={user.first_name}
          onChange={handleTextChange}
        />

        <label htmlFor="lastname">{/* Last name */}</label>
        <input
          id="last_name"
          className="input"
          type="text"
          placeholder="Last Name"
          onChange={handleTextChange}
          value={user.last_name}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          className="input"
          type="number"
          min="0"
          max="99"
          onChange={handleTextChange}
          value={user.age}
        />
        <label htmlFor="username">{/* User name */}</label>
        <input
          id="user_name"
          className="input"
          type="text"
          placeholder="User Name"
          onChange={handleTextChange}
          value={user.user_name}
        />
        <label htmlFor="password">{/* Password */}</label>
        <input
          id="password"
          className="input"
          type="text"
          placeholder="Password"
          onChange={handleTextChange}
          value={user.password}
        />
        <label htmlFor="email">{/* Email */}</label>
        <input
          id="email"
          className="input"
          type="text"
          placeholder="Email"
          onChange={handleTextChange}
          value={user.email}
        />
        <button type="text" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
