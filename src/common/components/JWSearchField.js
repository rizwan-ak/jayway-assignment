import React, { useState } from "react";
import "../styles/searchField.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWSearchField() {
  const [enableSearch, setEnableSearch] = useState(false);
  return (
    <div className="search-field-box">
      <JWIcon src={icons.search} onClick={() => setEnableSearch(true)} />
      <input
        type="text"
        placeholder=""
        className="search-field"
        autoFocus={enableSearch}
      />
    </div>
  );
}
