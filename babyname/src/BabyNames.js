import React, {useState} from "react";
import {sortArray} from "./helper.js";
import Search from "./Search.js";

const BabyNames = (props) => {
    const sortedBabyNames = sortArray(props.names);
    const [input, setInput] = useState("");
    const [namesToDisplay, setNamesToDisplay] = useState(sortedBabyNames);
const type = (event)=>{
    setInput(event.target.value)
}

let displayName = input.length ===0 ? sortedBabyNames : sortedBabyNames.filter(el=>el.name.toLowerCase().includes(input.toLowerCase()))
const chooseName = (event)=>{
    // setName(event.target.value)
    console.log(typeof event.target.innerText)
    
    displayName=displayName.filter((name)=>
    {console.log(name.name)
     return name.name !== event.target.innerText})
     console.log(displayName)
}

   return (
<div className="babyNames">
<p>favs: </p>




<Search type={type} input={input}/>
{displayName.map(el=> {
  const textColor=el.sex ==="m" ? "boy" : "girl"
  return <p onClick={chooseName} key={el.id} className = {textColor}>{el.name}</p> 
  })}

</div>
    )
}

export default BabyNames;

