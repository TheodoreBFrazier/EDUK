import axios from "axios";
import { useState } from "react";

const API = process.env.REACT_APP_API_URL;
function CreateResource({ uid }) {
  const [resource, setResource] = useState({
    resource_name: "",
    description: "",
    resource_category: "",
    start_datetime: "",
    end_datetime: "",
    url: "",
    isverified: false,
  });
  const handleTextChange = (e) => {
    setResource({ ...resource, [e.target.id]: e.target.name });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (uid) {
      axios
        .post(`${API}/users/${uid}/resources`, resource)
        .then((res) => console.log(res.data.result))
        .catch((e) => console.log(e));
    } else {
      axios
        .post(`${API}/resources`, resource)
        .then((res) => console.log(res.data.result))
        .catch((e) => console.log(e));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="resource_name">Resource Name</label>
        <br />
        <input
          id="resource_name"
          value={resource_name}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="description">Resource Description</label>
        <br />
        <textarea
          id="description"
          value={description}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="category">Resource Category</label>
        <br />
        <input
          id="resource_category"
          value={resource_category}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="start_datetime">Start Date and Time</label>
        <br />
        <input
          id="start_datetime"
          value={start_datetime}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="end_datetime">End Date and Time</label>
        <br />
        <input
          id="end_datetime"
          value={start_datetime}
          onChange={handleTextChange}
          type="text"
        />
        <br />
        <label htmlFor="url">Link</label>
        <br />
        <input id="url" value={url} onChange={handleTextChange} type="text" />
        <br />
        <input type={submit} />
      </form>
    </div>
  );
}

export default CreateResource;
