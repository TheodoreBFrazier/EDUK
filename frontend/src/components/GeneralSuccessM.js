import React from "react";
import FlashMessage from "react-flash-message";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function GeneralSuccessM({ message }) {
  return (
    <div className="message-display">
      <FlashMessage duration={5000}>
        <span>
          <strong>{message}</strong>
        </span>
        <span>
          <CheckCircleIcon color="success" />
        </span>
      </FlashMessage>
    </div>
  );
}

export default GeneralSuccessM;
