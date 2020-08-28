import React, { useState } from "react";
import { sortArray } from "./helper.js";
import Search from "./Search.js";

const BabyNames = (props) => {
  const sortedBabyNames = sortArray(props.names);
  const [namesToDisplay, setNamesToDisplay] = useState(sortedBabyNames);
  const [favouriteNames, setFavouriteNames] = useState([]);

  const type = (event) => {
    const inputValue = event.target.value;
    const displayName = sortedBabyNames.filter((el) =>
      el.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setNamesToDisplay(displayName);
  };

  const chooseName = (event) => {
    console.log(event.target.innerText);
    setFavouriteNames(favouriteNames.concat(event.target.innerText));
    setNamesToDisplay(
      namesToDisplay.filter((el) => el.name !== event.target.innerText)
    );
  };

  return (
    <div>
      <div className="babyNames">
        <p>Favs:</p>
        {favouriteNames.map((el) => (
          <p key={el}> {el} </p>
        ))}
      </div>

      <Search type={type} />
      <div className="babyNames">
        {namesToDisplay.map((el) => {
          const textColor = el.sex === "m" ? "boy" : "girl";
          return (
            <p onClick={chooseName} key={el.id} className={textColor}>
              {el.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BabyNames;
