import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/card.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWCard({ name, pic, city, ref }) {
  return (
    <div className="card">
      <div className="card-color-outer-box">
        <div className="card-color-box">
          <JWTypography value={name} variant="title" />
        </div>
      </div>
      <div className="card-details-box">
        <div className="card-image">
          <JWAvatar src={pic} />
        </div>
        <JWTypography value={city} variant="sub-title" />
        <div className="card-icons-box">
          <JWIcon src={icons.msg} label={`email-${name}`} />
          <JWIcon src={icons.call} label={`call-${name}`} />
        </div>
      </div>
      {/* {/* <div className="card-gradient" /> */}
    </div>
  );
}
