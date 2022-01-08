import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/list.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWList() {
  return (
    <div className="list">
      <div className="list-gradient">
        <div className="list-image">
          <JWAvatar src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=152" />
        </div>
        <div className="grow-info">
          <JWTypography value="John Doe" variant="title" />
          <JWTypography value="John Doe" variant="sub-title" />
        </div>
        <div className="list-inline">
          <JWIcon src={icons.msgIcon} />
          <JWIcon src={icons.callIcon} />
        </div>
      </div>
    </div>
  );
}
