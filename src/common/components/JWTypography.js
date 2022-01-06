import React from "react";
import "../styles/typography.css";

export default function JWTypography({ variant, value }) {
  return <div className={variant}>{value}</div>;
}
