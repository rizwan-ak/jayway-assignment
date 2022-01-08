import React, { useEffect, useState } from "react";
import "../common/styles/team.css";
import JWTypography from "../common/components/JWTypography";
import JWCard from "../common/components/JWCard";
import JWList from "../common/components/JWList";
import JWSearchField from "../common/components/JWSearchField";
import JWIcon, { icons } from "../common/components/JWIcon";
import { fetchUsers } from "../common/api";
import { toggleSort } from "../common/utils";

const Team = () => {
  const [users, setUsers] = useState([]);
  const [isList, setIsList] = useState(false);
  const [isAsc, setIsAsc] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // useEffect to fetch data
  useEffect(() => {
    fetchUsers((val) => {
      setUsers(toggleSort(val, isAsc, setIsAsc));
      setFilteredUsers(toggleSort(val, isAsc, setIsAsc));
    });
  }, []);

  return (
    <div className="main">
      <JWTypography value="John Doe" variant="heading" />
      <div className="search-and-filter-box">
        <div className="sort-box">
          <JWIcon
            src={icons.sort}
            onClick={(setFilteredUsers) =>
              setFilteredUsers(toggleSort(filteredUsers, isAsc, setIsAsc))
            }
          />
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
        {filteredUsers.map(({ name, picture, location }, idx) => (
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
