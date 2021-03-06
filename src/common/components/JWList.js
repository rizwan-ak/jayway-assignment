import React from "react";
import JWAvatar from "./JWAvatar";
import JWTypography from "./JWTypography";
import "../styles/list.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWList({ name, pic, city }) {
  return (
    <article className="list">

      <div className="list-color-section">
      </div>
      <div className="list-details">
        <div className="list-image">
          <JWAvatar src={pic} />
        </div>
        <div className="grow-info">
          <JWTypography value={name} variant="title" />
          <JWTypography value={city} variant="sub-title" />
        </div>
        <div className="list-inline">
          <JWIcon src={icons.msg} label={`email-${name}`} />
          <JWIcon src={icons.call} label={`call-${name}`} />
        </div>
      </div>
    </article>
  );
}
