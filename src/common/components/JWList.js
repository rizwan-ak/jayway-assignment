import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/list.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWList({ name, pic, city }) {
  return (
    <div className="list">
      <div className="list-gradient">
        <div className="list-image">
          <JWAvatar src={pic} />
        </div>
        <div className="grow-info">
          <JWTypography value={name} variant="title" />
          <JWTypography value={city} variant="sub-title" />
        </div>
        <div className="list-inline">
          <JWIcon src={icons.msgIcon} />
          <JWIcon src={icons.callIcon} />
        </div>
      </div>
    </div>
  );
}
