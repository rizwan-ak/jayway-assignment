import React, { useState } from "react";
import "../styles/searchField.css";
import JWIcon, { icons } from "./JWIcon";

export default function JWSearchField({ onChange }) {
  const [enableSearch, setEnableSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (evt) => {
    setSearchText(evt.target.value);
    onChange(evt.target.value);
  };

  return (
    <div className="search-field-box">
      <JWIcon
        src={icons.search}
        aria-label="icon-to-search-field"
        onClick={() => setEnableSearch(true)}
      />
      <input
        aria-label="search-field"
        type="text"
        placeholder=""
        value={searchText}
        name="search users"
        className="search-field"
        autoFocus={enableSearch}
        onChange={handleSearchTextChange}
      />
    </div>
  );
}
