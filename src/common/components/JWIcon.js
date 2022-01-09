import React from "react";
import "../styles/icons.css";

import callIcon from "../assets/call.png";
import msgIcon from "../assets/msg.png";
import searchIcon from "../assets/search.png";
import sortIcon from "../assets/sort.png";
import listIcon from "../assets/list.png";
import cardsIcon from "../assets/cards.png";

export default function JWIcon({ src, onClick, label }) {
  return (
    <button
      className="icon-button"
      aria-label={`icon-to-${label}`}
      onClick={onClick}
    >
      <img src={src} alt={label} className="icon" />
    </button>
  );
}

export const icons = {
  call: callIcon,
  msg: msgIcon,
  cards: cardsIcon,
  list: listIcon,
  sort: sortIcon,
  search: searchIcon,
};
