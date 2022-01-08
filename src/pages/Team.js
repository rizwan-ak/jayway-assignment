import React, { useEffect, useState } from "react";
import "../common/styles/team.css";
import JWTypography from "../common/components/JWTypography";
import JWCard from "../common/components/JWCard";
import JWList from "../common/components/JWList";
import JWSearchField from "../common/components/JWSearchField";
import JWIcon, { icons } from "../common/components/JWIcon";
import { fetchUsers } from "../common/api";

const Team = () => {
  const [users, setUsers] = useState([]);
  const [isList, setIsList] = useState(false);

  // useEffect to fetch data
  useEffect(() => {
    fetchUsers((val) => setUsers(val));
  }, []);

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
          <JWIcon
            src={isList ? icons.list : icons.cards}
            onClick={() => setIsList(!isList)}
          />
        </div>
      </div>
      <div className="cards">
        {users.map(({ name, picture, location }, idx) => (
          <>
            {isList ? (
              <JWList
                key={idx}
                city={location?.city}
                name={`${name?.first} ${name?.last}`}
                pic={picture?.medium}
              />
            ) : (
              <JWCard
                key={idx}
                city={location?.city}
                name={`${name?.first} ${name?.last}`}
                pic={picture?.medium}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Team;
