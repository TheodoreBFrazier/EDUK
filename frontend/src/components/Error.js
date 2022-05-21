import React from "react";
import FlashMessage from "react-flash-message";
import "./error.css";

function Error({ error }) {
  return (
    <div className="error-show">
      <FlashMessage duration={5000}>
        <strong>{error}</strong>
      </FlashMessage>
    </div>
  );
}

export default Error;
