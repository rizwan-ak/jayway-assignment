import React from "react";
import CallIcon from "../assets/call.png";
import EmailIcon from "../assets/msg.png";

export default function JWIcon({ call }) {
  return (
    <img
      src={call ? CallIcon : EmailIcon}
      alt={call ? "Call Icon" : "Email Icon"}
      className={!call && "icon-margin-right"}
    />
  );
}
