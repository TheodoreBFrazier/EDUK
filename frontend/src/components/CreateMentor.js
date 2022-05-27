import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Form, Button } from "react-bootstrap";
import "../css/createMentor.css";

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
    <div className="create-mentor-form">
      <h2>Let's create your account!</h2>
		<h3>Become a Mentor at EDUK!</h3>
    <br />
    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicFirstName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" value={mentor.mentor_fname} onChange={handleTextChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicLastName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" value={mentor.mentor_lname} onChange={handleTextChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicBio">
    <Form.Label>Bio</Form.Label>
    <Form.Control type="text" placeholder="Enter Bio" value={mentor.bio} onChange={handleTextChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicSpeciality">
    <Form.Label>Speciality</Form.Label>
    <Form.Control type="text" placeholder="Enter Speciality" value={mentor.speciality} onChange={handleTextChange} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" value={mentor.email} onChange={handleTextChange} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> 
    </div>
  );
}

export default CreateMentor;



///// <div id="volunteers">
    //   <form className="form" onSubmit={handleSubmit}>
    //     <div className="subtitle">Let's create your account!</div>
    //     <div className="title">Become a Mentor at EDUK!</div>

    //     <label htmlFor="firstname" className="placeholder">
    //       First Name
    //     </label>
    //     <input
    //       id="mentor_fname"
    //       className="input"
    //       type="text"
    //       value={mentor.mentor_fname}
    //       // placeholder=" "
    //       onChange={handleTextChange}
    //     />

    //     <label htmlFor="lastname" className="placeholder">
    //       Last Name
    //     </label>
    //     <input
    //       id="mentor_lname"
    //       className="input"
    //       type="text"
    //       onChange={handleTextChange}
    //       value={mentor.mentor_lname}
    //     />

    //     <label htmlFor="bio" className="placeholder">
    //       Bio
    //     </label>
    //     <input
    //       id="bio"
    //       className="input"
    //       type="text"
    //       onChange={handleTextChange}
    //       value={mentor.bio}
    //     />

    //     <label htmlFor="speciality" className="placeholder">
    //       Speciality
    //     </label>
    //     <input
    //       id="speciality"
    //       className="input"
    //       type="text"
    //       onChange={handleTextChange}
    //       value={mentor.speciality}
    //     />

    //     <label htmlFor="email" className="placeholder">
    //       Email
    //     </label>
    //     <input
    //       id="email"
    //       className="input"
    //       type="text"
    //       onChange={handleTextChange}
    //       value={mentor.email}
    //     />

    //     <button type="submit" className="submit">
    //       submit
    //     </button>
    //   </form>
    // </div>

