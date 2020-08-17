import React from "react";

function DropdownButton(props) {
  return (
    <div className="col-6">
      <label className="col-2">Sort By:</label>
      <select className="col-4" name="sort" id="sort" onChange={props.setSort}>
        <option value="laz">Last Name A-Z</option>
        <option value="lza">Last Name Z-A</option>
        <option value="faz">First Name A-Z</option>
        <option value="fza">First Name Z-A</option>
        </select>
    </div>
  )
}

export default DropdownButton;