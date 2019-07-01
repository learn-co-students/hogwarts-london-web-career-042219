import React from "react";

//we need to sort by name and weight
//we need to filter by greased or all

//We need the state of the checked box. We edit state in APP.
const Search = props => (
  <div>
    <div style={{ margin: "10px" }}>
      <label>Sort by: </label>
      <select onChange={event => props.updateSortBy(event.target.value)}>
        <option value="all">All</option>
        <option value="name">name</option>
        <option value="weight">weight</option>
      </select>
    </div>
    <div>
      <input onChange={props.toggleShowGreasedOnly} type="checkbox" />
      <label> Show Greased only</label>
    </div>
  </div>
);

export default Search;
