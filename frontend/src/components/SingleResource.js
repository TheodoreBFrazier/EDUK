import React, { useState } from "react";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import { Card } from "@mui/material";
import axios from "axios";
//message component
import GeneralSuccessM from "./GeneralSuccessM";

var cardStyle = {
  height: "auto",
  width: "400px",
  padding: "20px",
  boxshadow: "box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px",
  // display: "inline-block",
};

//Api
const API = process.env.REACT_APP_API_URL;
//need to add a boolean in order to not show delete button on resources page
function SingleResource({ resource, showDelete }) {
  const [showMessage, setShowMessage] = useState(false);
  const userId = localStorage.getItem("userId");

  const removeResource = () => {
    axios
      .delete(`${API}/users/${userId}/resources/${resource.resource_id}`)
      .then((res) => setShowMessage(true))
      .catch((e) => console.log(e));
  };
  return (
    <div className="resource-card">
      {showMessage ? (
        <GeneralSuccessM message={"Deleted Succesfully!!!"} />
      ) : (
        ""
      )}
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
        {showDelete ? (
          <Button
            color="error"
            variant="contained"
            size="small"
            onClick={removeResource}
          >
            Delete
          </Button>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
}

export default SingleResource;
