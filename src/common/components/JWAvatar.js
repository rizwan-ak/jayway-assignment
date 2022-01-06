import React from "react";
import "../styles/avatar.css";

export default function JWAvatar({ src }) {
  return <img src={src} alt={src} className="profile-picture" />;
}
