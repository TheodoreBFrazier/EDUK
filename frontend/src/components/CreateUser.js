import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "../css/CreateUser.css";

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

  const addUser = () => {
    axios
      .post(`${API}/auth/sign_up`, user)
      .then(() => {
        navigate(`/users`);
      })
      .catch((c) => console.warn("catch", c));
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
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Welcome to EDUK!</div>
        <div className="subtitle">Let's create your account!</div>
        <div>
          Already signed Up? <Link to="/users/login">Login Here</Link>
        </div>

        <div className="input-container ic1">
          <input
            id="first_name"
            className="input"
            type="text"
            value={user.first_name}
            placeholder=" "
            onChange={handleTextChange}
          />
          <div className="cut"></div>
          <label htmlFor="first_name" className="placeholder">
            First name
          </label>
        </div>

        <div className="input-container ic2">
          <input
            id="last_name"
            className="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={user.last_name}
          />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Last name
          </label>
        </div>

        <div className="input-container ic2">
          <input
            id="age"
            className="input"
            type="number"
            placeholder=" "
            onChange={handleTextChange}
            value={user.age}
          />
          <div className="cut"></div>
          <label htmlFor="age" className="placeholder">
            Age
          </label>
        </div>

        <div className="input-container ic2">
          <input
            id="user_name"
            className="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={user.user_name}
          />
          <div className="cut"></div>
          <label htmlFor="username" className="placeholder">
            User name
          </label>
        </div>

        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={user.password}
          />
          <div className="cut"></div>
          <label htmlFor="password" className="placeholder">
            Password
          </label>
        </div>

        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={user.email}
          />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>

        <button type="text" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
