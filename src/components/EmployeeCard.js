import React from "react";
import CardBody from "./CardBody";

function EmployeeCard(props) {
  return (
    <div className="row">
      {props.employees.filter(employee => `${employee.name.first} ${employee.name.last}`.includes(props.filter)).map((employee, i) => (
        <div className="card col-4" key={i}>
          <img className="card-img-top" src={employee.picture.large} />
          <h5 className="card-title text-center">{`${employee.name.last}, ${employee.name.first}`}</h5>
          <CardBody employee={employee} />
        </div>
      ))}
    </div>
  )
}

export default EmployeeCard;