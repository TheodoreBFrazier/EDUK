// import React from "react";
// import axios from "axios";
// import "../css/createResource.css"
// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// const API = process.env.REACT_APP_API_URL;

// function UpdateResource() {
//   const [resource, setResource] = useState({
//     resource_name: "",
//     description: "",
//     resource_category: "",
//     start_datetime: "",
//     end_datetime: "",
//     url: "",
//     is_verified: false,
//   });

//   const {resource_id} = useParams();
//   const navigate = useNavigate();

//   const editResource = (updatedResource, resource_id) => {
//     axios
//       .put(`${API}/resources/${resource_id}`, updatedResource)
//       .then(
//         () => {
//           navigate(`/resources/${resource_id}`);
//         },
//         (error) => console.error(error)
//       )
//       .catch((c) => console.warn("catch", c));
//   };

//   const handleTextChange = (e) => {
//     setResource({ ...resource, [e.target.id]: e.target.value });
//   };

//   useEffect(() => {
//     axios.get(`${API}/resources/${resource_id}`).then(
//       (response) => setResource(response.data),
//       (error) => console.log(error)
//     );
//   }, [resource_id, navigate]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     editResource(resource,resource_id);
//   };
//   return (
//     <div>
//       <form className="form" onSubmit={handleSubmit}>
//         <label htmlFor="resource_name">Resource Name</label>
//         <br />
//         <input
//           id="resource_name"
//           value={resource.resource_name}
//           placeholder={resource.resource_name}
//           onChange={handleTextChange}
//           type="text"
//           required
//         />
//         <br />
//         <label htmlFor="description">Resource Description</label>
//         <br />
//         <textarea
//           id="description"
//           value={resource.description}
//           placeholder={resource.description}
//           onChange={handleTextChange}
//         />
//         <br />
//         <label htmlFor="resource_category">Resource Category</label>
//         <br />
//         <input
//           id="resource_category"
//           value={resource.resource_category}
//           placeholder={resource.resource_category}
//           onChange={handleTextChange}
//           type="text"
//         />
//         <br />
//         <label htmlFor="start_datetime">Start Date and Time</label>
//         <br />
//         <input
//           id="start_datetime"
//           value={resource.start_datetime}
//           placeholder={resource.start_datetime}
//           onChange={handleTextChange}
//           type="text"
//         />
//         <br />
//         <label htmlFor="end_datetime">End Date and Time</label>
//         <br />
//         <input
//           id="end_datetime"
//           value={resource.end_datetime}
//           placeholder={resource.end_datetime}
//           onChange={handleTextChange}
//           type="text"
//         />
//         <br />
//         <label htmlFor="url">Link</label>
//         <br />
//         <input
//           id="url"
//           value={resource.url}
//           placeholder={resource.url}
//           onChange={handleTextChange}
//           type="text"
//           required
//         />
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default UpdateResource;
