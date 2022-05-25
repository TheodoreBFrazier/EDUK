import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../css/CreateUser.css";

const API = process.env.REACT_APP_API_URL;

function CreateMentor() {
  let navigate = useNavigate();
  const [mentor, setMentor] = useState({
    mentor_fname: "",
    mentor_lname: "",
    bio: "",
    email: "",
    speciality: "",
  });

  const addMentor = () => {
    axios
      .post(`${API}/mentors`, mentor)
      .then(() => {
        alert(
          "Thank you for signing up. We'll send you an invite to get started soon!"
        );
        navigate(`/`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setMentor({ ...mentor, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMentor();
  };

  return (
    <div id="volunteers">
      <form className="form" onSubmit={handleSubmit}>
        <div className="subtitle">Let's create your account!</div>
        <div className="title">Become a Mentor at EDUK!</div>

        <label htmlFor="firstname" className="placeholder">
          First Name
        </label>
        <input
          id="mentor_fname"
          className="input"
          type="text"
          value={mentor.mentor_fname}
          // placeholder=" "
          onChange={handleTextChange}
        />

        <label htmlFor="lastname" className="placeholder">
          Last Name
        </label>
        <input
          id="mentor_lname"
          className="input"
          type="text"
          onChange={handleTextChange}
          value={mentor.mentor_lname}
        />

        <label htmlFor="bio" className="placeholder">
          Bio
        </label>
        <input
          id="bio"
          className="input"
          type="text"
          onChange={handleTextChange}
          value={mentor.bio}
        />

        <label htmlFor="speciality" className="placeholder">
          Speciality
        </label>
        <input
          id="speciality"
          className="input"
          type="text"
          onChange={handleTextChange}
          value={mentor.speciality}
        />

        <label htmlFor="email" className="placeholder">
          Email
        </label>
        <input
          id="email"
          className="input"
          type="text"
          onChange={handleTextChange}
          value={mentor.email}
        />

        <button type="submit" className="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default CreateMentor;
