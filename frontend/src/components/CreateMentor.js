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
        <div class="subtitle">Let's create your account!</div>
        <div class="title">Become a Mentor at EDUK!</div>
        

      
          <label for="firstname" class="placeholder">
            First Name
          </label>
          <input
            id="mentor_fname"
            class="input"
            type="text"
            value={mentor.mentor_fname}
            // placeholder=" "
            onChange={handleTextChange}
          />
   

    
          <label for="lastname" class="placeholder">
            Last Name
          </label>
          <input
            id="mentor_lname"
            class="input"
            type="text"
            onChange={handleTextChange}
            value={mentor.mentor_lname}
          />
      


          <label for="bio" class="placeholder">
            Bio
          </label>
          <input
            id="bio"
            class="input"
            type="text"
            onChange={handleTextChange}
            value={mentor.bio}
          />


   
          <label for="speciality" class="placeholder">
            Speciality
          </label>
          <input
            id="speciality"
            class="input"
            type="text"
            onChange={handleTextChange}
            value={mentor.speciality}
          />


     
          <label for="email" class="placeholder">
            Email
          </label>
          <input
            id="email"
            class="input"
            type="text"
            onChange={handleTextChange}
            value={mentor.email}
          />


        <button type="submit" class="submit">
          submit
        </button>
      </form>
    </div>
  );
}

export default CreateMentor;
