import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function UpdateUser() {
  const [user, setUser] = useState({});
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}.users/${index}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [index]);

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.uid]: event.taget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/users/${index}`, user)
      .then(() => {
        navigate("/users");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name:</label>
        <input
          id="first_name"
          value={user.first_name}
          type="text"
          onChange={handleTextChange}
          placeholder="First Name"
          required
        />

        <label htmlFor="last_name">Last Name:</label>
        <input
          id="last_name"
          value={user.last_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Last Name"
          required
        />

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          value={user.age}
          type="number"
          onChange={handleTextChange}
          placeholder="Age"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={user.email}
          type="text"
          onChange={handleTextChange}
          placeholder="Email"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UpdateUser;
