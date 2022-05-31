import React from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { Card } from "@mui/material";

var cardStyle = {
  height: "auto",
  width: "400px",
  padding: "20px",
  boxshadow: "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px",
};

//need to add a boolean in order to not show delete button on resources page

function UserResource({ resource, removeResource }) {
  return (
    <div className="resource-card">
      <Card style={cardStyle} variant="outlined">
        <Link to={`/resources/${resource.resource_id}`}>
          <h4> {resource.resource_name} </h4>
        </Link>
        <p> {resource.description} </p>
        <Link to={`/resources/${resource.resource_id}`}>
          <Button variant="text" size="small">
            View
          </Button>
        </Link>

        <Button
          color="error"
          variant="contained"
          size="small"
          style={{ width: "40px" }}
          onClick={() => removeResource(resource.resource_id)}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
}

export default UserResource;
