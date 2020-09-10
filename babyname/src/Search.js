import React, { useState } from "react";

const Search = (props) => {
  return (
    <div className="input_line">
      <label htmlFor="name" className="input_title">Find name: </label>
      <input className="input" id="name" onChange={props.type} type="text" />
      <div className="radio_btn">
      <input onChange={props.handleGenderChoise} type="radio" id="male" name="gender" value="m" />
      <label htmlFor="male"><img width="50px" height="50px" border="2px solid black" text-align="center"
 src="/male.png" alt="Male" /></label>
 </div>
 <div className="radio_btn">
      <input onChange={props.handleGenderChoise} type="radio" id="female" name="gender" value="f" />
      <label htmlFor="female"><img width="50px" height="50px" border="2px solid black" text-align="center" src="/female.png" alt="Female" /></label>
      </div>
      <div className="radio_btn">
      <input onChange={props.handleGenderChoise} type="radio" id="all" name="gender" value="all" defaultChecked />
      <label htmlFor="all"><img width="50px" height="50px" border="2px solid black" text-align="center" src="/all.png" alt="All" /></label>
      </div>
    </div>
  );
};

export default Search;
