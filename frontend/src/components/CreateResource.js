import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;
function CreateResource() {
  const [resource, setResource] = useState({
    resource_name: "",
    description: "",
    resource_category: "",
    start_datetime: "",
    end_datetime: "",
    url: "",
    is_verified: false,
  });

  const navigate = useNavigate();
  const handleTextChange = (e) => {
    setResource({ ...resource, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //add a new resource to the database

    axios
      .post(`${API}/resources`, resource)
      .then((res) => navigate("/resources"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="resource_name">Resource Name</label>
        <br />
        <input
          id="resource_name"
          value={resource.resource_name}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="description">Resource Description</label>
        <br />
        <textarea
          id="description"
          value={resource.description}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="resource_category">Resource Category</label>
        <br />
        <input
          id="resource_category"
          value={resource.resource_category}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="start_datetime">Start Date and Time</label>
        <br />
        <input
          id="start_datetime"
          value={resource.start_datetime}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="end_datetime">End Date and Time</label>
        <br />
        <input
          id="end_datetime"
          value={resource.end_datetime}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="url">Link</label>
        <br />
        <input
          id="url"
          value={resource.url}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreateResource;
