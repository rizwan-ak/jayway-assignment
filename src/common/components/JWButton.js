import React from "react";
import "../styles/buttons.css";

export default function JWButton({ handleButtonClick }) {
  return (
    <div className="button-box">
      <button className="load-more-button" onClick={handleButtonClick}>
        Load more
      </button>
    </div>
  );
}
