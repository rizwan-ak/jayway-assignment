import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/card.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWCard() {
  return (
    <div className="card">
      <div className="card-gradient" />
      <JWTypography value="John Doe" variant="title" />
      <div className="card-image">
        <JWAvatar src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=152" />
      </div>
      <JWTypography value="John Doe" variant="sub-title" />
      <div className="inline">
        <JWIcon src={icons.msgIcon} />
        <JWIcon src={icons.callIcon} />
      </div>
    </div>
  );
}
