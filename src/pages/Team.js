import React from "react";
import "../common/styles/team.css";
import JWTypography from "../common/components/JWTypography";
import JWCard from "../common/components/JWCard";
import JWList from "../common/components/JWList";
import JWSearchField from "../common/components/JWSearchField";
import JWIcon, { icons } from "../common/components/JWIcon";

const Team = () => {
  return (
    <div className="main">
      <JWTypography value="John Doe" variant="heading" />
      <div className="search-and-filter-box">
        <div className="sort-box">
          <JWIcon src={icons.sort} />
        </div>
        <div className="search-box">
          <JWSearchField />
        </div>
        <div className="list-toggle-box">
          <JWIcon src={icons.list} />
        </div>
      </div>
      <div className="cards">
        {[1, 1, 1, 1, 1, 1].map((el, idx) => (
          <JWList key={idx} />
          // <JWCard />
        ))}
      </div>
    </div>
  );
};

export default Team;
