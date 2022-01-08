import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/card.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWCard({ name, pic, city, ref }) {
  return (
    <div className="card">
      <div className="card-gradient" />
      <JWTypography value={name} variant="title" />
      <div className="card-image">
        <JWAvatar src={pic} />
      </div>
      <JWTypography value={city} variant="sub-title" />
      <div className="inline">
        <JWIcon src={icons.msgIcon} />
        <JWIcon src={icons.callIcon} />
      </div>
    </div>
  );
}
