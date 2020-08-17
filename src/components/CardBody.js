import React from "react";

function CardBody({ employee }) {
  return (
    <ul className="card-text" style={{listStyleType: "none"}}>
      <li>email: {employee.email}</li>
      <li>phone: {employee.phone}</li>
    </ul>
  )
}

export default CardBody;