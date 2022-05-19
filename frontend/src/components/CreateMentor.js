import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../css/CreateUser.css";

const API = process.env.REACT_APP_API_URL;

function CreateMentor() {
  let navigate = useNavigate();
  const [mentor, setMentor] = useState({
    first_name: "",
    last_name: "",
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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div class="title">Become a Mentor at EDUK!</div>
        <div class="subtitle">Let's create your account!</div>

        <div class="input-container ic1">
          <input
            id="first_name"
            class="input"
            type="text"
            value={mentor.first_name}
            placeholder=" "
            onChange={handleTextChange}
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            First Name
          </label>
        </div>

        <div class="input-container ic2">
          <input
            id="last_name"
            class="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={mentor.last_name}
          />
          <div class="cut"></div>
          <label for="lastname" class="placeholder">
            Last Name
          </label>
        </div>

        <div class="input-container ic2">
          <input
            id="bio"
            class="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={mentor.bio}
          />
          <div class="cut"></div>
          <label for="bio" class="placeholder">
            Bio
          </label>
        </div>

        <div class="input-container ic2">
          <input
            id="speciality"
            class="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={mentor.speciality}
          />
          <div class="cut"></div>
          <label for="speciality" class="placeholder">
            Speciality
          </label>
        </div>

        <div class="input-container ic2">
          <input
            id="email"
            class="input"
            type="text"
            placeholder=" "
            onChange={handleTextChange}
            value={mentor.email}
          />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">
            Email
          </label>
        </div>

        <button type="submit" class="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default CreateMentor;
