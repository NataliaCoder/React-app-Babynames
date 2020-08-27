import React, {useState} from "react";

const Search =(props) =>{

return (
    <div>
    <label for="name">Find name:</label>
<input className="www" id="name" onChange={props.type} type="text" />

</div>
)
}

export default Search;