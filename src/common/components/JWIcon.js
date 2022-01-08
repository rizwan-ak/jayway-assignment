import React from "react";
import "../styles/icons.css";

import callIcon from "../assets/call.png";
import msgIcon from "../assets/msg.png";
import searchIcon from "../assets/search.png";
import sortIcon from "../assets/sort.png";
import listIcon from "../assets/list.png";
import cardsIcon from "../assets/cards.png";

export default function JWIcon({ src, onClick }) {
  return <img src={src} alt={""} className="icon" onClick={onClick} />;
}

export const icons = {
  call: callIcon,
  msg: msgIcon,
  cards: cardsIcon,
  list: listIcon,
  sort: sortIcon,
  search: searchIcon,
};
