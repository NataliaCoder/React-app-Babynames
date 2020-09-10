import React, { useState } from "react";

const Search = (props) => {
  return (
    <div className="input_line">
      <label htmlFor="name">Find name: </label>
      <input className="www" id="name" onChange={props.type} type="text" />
      <input onChange={props.handleGenderChoise} type="radio" id="male" name="gender" value="m" />
      <label htmlFor="male">Male</label>
      <input onChange={props.handleGenderChoise} type="radio" id="female" name="gender" value="f" />
      <label htmlFor="female">Female</label>
      <input onChange={props.handleGenderChoise} type="radio" id="all" name="gender" value="all" />
      <label htmlFor="all">All names</label>
    </div>
  );
};

export default Search;
