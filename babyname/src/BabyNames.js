import React, { useState } from "react";
import { sortArray } from "./helper.js";
import Search from "./Search.js";

const BabyNames = (props) => {
  const sortedBabyNames = sortArray(props.names);
  const [namesToDisplay, setNamesToDisplay] = useState(sortedBabyNames);
  const [favouriteNames, setFavouriteNames] = useState([]);
  const [gender, setGender] = useState("all");

  const type = (event) => {
    const inputValue = event.target.value;
    const displayName =
      gender === "all"
        ? sortedBabyNames.filter((el) =>
            el.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        : sortedBabyNames.filter(
            (el) =>
              el.name.toLowerCase().includes(inputValue.toLowerCase()) &&
              el.sex === gender
          );
    setNamesToDisplay(displayName);
  };

  const chooseName = (event) => {
    let clickedName = event.target.innerText;
    const nameToAdd = namesToDisplay.find(
      (names) => names.name === clickedName
    );
    // const updatedFavouriteNames = [...favouriteNames, nameToAdd];
    const updatedFavouriteNames = favouriteNames.concat(nameToAdd);
    setFavouriteNames(updatedFavouriteNames);

    setNamesToDisplay(
      namesToDisplay.filter((el) => el.name !== event.target.innerText)
    );
  };
  // reduce (filter+ map)
  const unSelectName = (event) => {
    let clickedFavName = event.target.id;
    let clickedNameObject = favouriteNames.find(
      (names) => names.name === clickedFavName
    );
    const deleteName = favouriteNames.filter(
      (el) => el.name !== clickedFavName
    );
    setFavouriteNames(deleteName);
    console.log(clickedFavName);
    const addedClickedNameObject = sortArray([
      ...namesToDisplay,
      clickedNameObject,
    ]);
    setNamesToDisplay(addedClickedNameObject);
  };
  const handleGenderChoise = (event) => {
    const genderFilterParametr = event.target.value;
    setGender(genderFilterParametr);
    const filteredNamesByGender =
      genderFilterParametr === "all"
        ? sortedBabyNames
        : sortedBabyNames.filter((el) => el.sex === genderFilterParametr);
    setNamesToDisplay(filteredNamesByGender);
  };

  return (
    <div>
  <p>Choose your baby's name</p>

      <div className="babyNames">
      <p className="favourites">Favourites:</p>
        {favouriteNames.map((el) => {
          let textColor = el.sex === "m" ? "boy" : "girl";
          return (
            <div
              onClick={unSelectName}
              id={el.name}
              key={el.name}
              className={textColor}
            >
              {el.name}
            </div>
          );
        })}
      </div>

      <Search type={type} handleGenderChoise={handleGenderChoise} />
      <div className="babyNames">
        {namesToDisplay.map((el) => {
          let textColor = el.sex === "m" ? "boy" : "girl";
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
