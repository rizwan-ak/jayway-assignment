import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/card.css";
import JWIcon from "./JWIcon";

export default function JWCard() {
  return (
    <div className="card">
      <div className="card-gradient" />
      <JWTypography value="John Doe" variant="title" />
      <div className="card-image">
        <JWAvatar src="https://licenceindia.s3.ap-south-1.amazonaws.com/s3fs-public/news27novstep10licenseindia105535dde829e97bf4.jpg" />
      </div>
      <JWTypography value="John Doe" variant="sub-title" />
      <div className="inline">
        <JWIcon />
        <JWIcon call />
      </div>
    </div>
  );
}
