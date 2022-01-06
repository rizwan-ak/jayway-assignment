import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/list.css";
import JWIcon from "./JWIcon";

export default function JWList() {
  return (
    <div className="list">
      <div className="list-gradient">
        <div className="list-image">
          <JWAvatar src="https://licenceindia.s3.ap-south-1.amazonaws.com/s3fs-public/news27novstep10licenseindia105535dde829e97bf4.jpg" />
        </div>
        <div className="grow-info">
          <JWTypography value="John Doe" variant="title" />
          <JWTypography value="John Doe" variant="sub-title" />
        </div>
        <div className="list-inline">
          <JWIcon />
          <JWIcon call />
        </div>
      </div>
    </div>
  );
}
