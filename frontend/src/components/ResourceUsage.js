import axios from "axios";
import React, { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;
function ResourceUsage({ resource }) {
  const [resourceUsersN, setResourceUsersN] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/resources/${resource.resource_id}/users`)
      .then((res) => setResourceUsersN(res.data.result.length))
      .catch((e) => console.log(e));
  }, [resource.resource_id]);
  return (
    <div className="admin-resource">
      <h3>
        Resource({resource.resource_id}) {resource.resource_name}
      </h3>
      <div>
        <strong>Number of users:</strong>{" "}
        <span className="admin-resource-span">{resourceUsersN}</span>
      </div>
    </div>
  );
}

export default ResourceUsage;
