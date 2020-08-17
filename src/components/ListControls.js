import React from "react";
import DropdownButton from "./DropdownButton";

function ListControls(props) {
  return (
    <div className="row">
      <div className="col-3"></div>
      <input id="search" type="search" className="col-3" onChange={props.setFilter}  placeholder="Name Search"/>
      <DropdownButton setSort={props.setSort}/>
    </div>
  )
}

export default ListControls;