import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    employees: [],
    sortBy: "",
    filterBy: ""
  }

  componentDidMount() {
    this.findEmployees();
  }

  findEmployees = () => {
    API.search()
      .then(res => this.setState({ 
        employees: res.data.results
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <EmployeeCard employees={this.state.employees} />
    )
  }
}

export default EmployeeContainer;