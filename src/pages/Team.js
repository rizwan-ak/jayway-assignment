import React, { useCallback, useEffect, useRef, useState } from "react";
import "../common/styles/team.css";
import JWTypography from "../common/components/JWTypography";
import JWCard from "../common/components/JWCard";
import JWList from "../common/components/JWList";
import JWSearchField from "../common/components/JWSearchField";
import JWIcon, { icons } from "../common/components/JWIcon";
import { fetchUsers } from "../common/api";
import { toggleSort, filterUsers } from "../common/utils";
import JWButton from "../common/components/JWButton";

const Team = () => {
  const [users, setUsers] = useState([]);
  const [isList, setIsList] = useState(false);
  const [isAsc, setIsAsc] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);

  // useEffect to fetch data
  useEffect(() => {
    fetchUsers(pageNumber, users, (val) => {
      setUsers(toggleSort(val, isAsc, setIsAsc));
      setFilteredUsers(toggleSort(val, isAsc, setIsAsc));
    });
  }, [pageNumber]);

  return (
    <div className="main">
      <JWTypography value="Meet the Team" variant="heading" />
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
          <JWSearchField
            onChange={(val) => filterUsers(val, users, setFilteredUsers)}
          />
        </div>
        <div className="list-toggle-box">
          <JWIcon
            src={isList ? icons.list : icons.cards}
            onClick={() => setIsList(!isList)}
          />
        </div>
      </div>
      {filteredUsers.length > 0 ? (
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
                <>
                  <JWCard
                    key={idx}
                    city={location?.city}
                    name={`${name?.first} ${name?.last}`}
                    pic={picture?.medium}
                  />
                </>
              )}
            </>
          ))}
        </div>
      ) : (
        <JWTypography
          value="Something went wrong please check our internet connection and refresh the page."
          variant="error"
        />
      )}

      <JWButton
        handleButtonClick={() =>
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      />
    </div>
  );
};

export default Team;
