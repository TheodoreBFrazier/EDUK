import axios from "axios";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";

const API = process.env.REACT_APP_API_URL;
function ResourceUsage({ resource }) {
  const [resourceUsersN, setResourceUsersN] = useState(0);
  useEffect(() => {
    axios
      .get(`${API}/resources/${resource.resource_id}/users`)
      .then((res) => setResourceUsersN(res.data.result.length))
      .catch((e) => console.log(e));
  }, [resource.resource_id]);
  return (
    <Card>
      <Card.Header className="bg-info">
        <h3>
          Resource({resource.resource_id}): {resource.resource_name}
        </h3>
      </Card.Header>
      <Card.Body>
        <h4>
          <span className="admin-resource-span">Number of users:</span>{" "}
          <span>{resourceUsersN}</span>
        </h4>
      </Card.Body>
    </Card>
  );
}

export default ResourceUsage;
