import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import "../css/successMessage.css";

//show message after adding a resource to the user profile
function SuccessMessage() {
  return (
    <div className="resource-success">
      <span>Resource Added Successfully</span>
      <CheckCircleIcon color="success" />
      <div>
        <Link to="/resources">
          <strong>Continue</strong>
        </Link>
      </div>
    </div>
  );
}

export default SuccessMessage;
