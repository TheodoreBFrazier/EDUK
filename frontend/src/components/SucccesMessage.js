import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

function SuccessMessage() {
  return (
    <div>
      <div>Resource Added Successfully</div>
      <CheckCircleIcon />
      <Link to="/recources">Continue</Link>
    </div>
  );
}

export default SuccessMessage;
