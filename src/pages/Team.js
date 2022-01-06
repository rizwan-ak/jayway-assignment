import React from "react";
import "../common/styles/team.css";
import JWTypography from "../common/components/JWTypography";
import JWCard from "../common/components/JWCard";
import JWList from "../common/components/JWList";

const Team = () => {
  return (
    <div className="main">
      <JWTypography value="John Doe" variant="heading" />
      <div className="cards">
        <JWList />
        {/* {[1, 1, 1, 1, 1, 1].map((el) => (
          <JWCard />
        ))} */}
      </div>
    </div>
  );
};

export default Team;
