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
        <div className="input-container ic1">
          <input
            id="resource_name"
            className="input"
            value={resource.resource_name}
            onChange={handleTextChange}
            type="text"
          />
          <div className="cut"></div>
          <label htmlFor="resource_name" className="placeholder">
            Resource Name
          </label>
        </div>
        <div className="input-container ic2">
          <textarea
            id="description"
            className="input"
            value={resource.description}
            onChange={handleTextChange}
          />
          <div className="cut"></div>
          <label htmlFor="description" className="placeholder">
            Resource Description
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="resource_category"
            className="input"
            value={resource.resource_category}
            onChange={handleTextChange}
            type="text"
          />
          <div className="cut"></div>
          <label htmlFor="resource_category" className="placeholder">
            Resource Category
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="start_datetime"
            className="input"
            value={resource.start_datetime}
            onChange={handleTextChange}
            type="text"
          />
          <div className="cut"></div>
          <label htmlFor="start_datetime" className="placeholder">
            Start Date and Time
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="end_datetime"
            className="input"
            value={resource.end_datetime}
            onChange={handleTextChange}
            type="text"
          />
          <div className="cut"></div>
          <label htmlFor="end_datetime" className="placeholder">
            End Date and Time
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="url"
            className="input"
            value={resource.url}
            onChange={handleTextChange}
            type="text"
          />
          <div className="cut cut-short"></div>
          <label htmlFor="url" className="placeholder">
            Link
          </label>
        </div>

        <input type="submit" className="submit" />
      </form>
    </div>
  );
}

export default CreateResource;
