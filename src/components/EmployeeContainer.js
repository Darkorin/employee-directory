import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";
import ListControls from "./ListControls";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    employees: [],
    filterBy: ""
  }

  componentDidMount() {
    this.findEmployees();

  }

  findEmployees = () => {
    API.search()
      .then(res => {
        this.setState({
          employees: res.data.results
        })
        this.setSort({ target: { value: "laz" } });
      })
      .catch(err => console.log(err));
  }

  setSort = e => {
    let type = "";
    const compare = (a, b) => {
      const nameA = a.name[type].toLowerCase();
      const nameB = b.name[type].toLowerCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    if (e.target.value === "laz") {
      type = "last";
      this.setState({
        employees: this.state.employees.sort(compare)
      });
    }
    if (e.target.value === "lza") {
      type = "last";
      this.setState({
        employees: this.state.employees.sort(compare)
      });
      this.setState({
        employees: this.state.employees.reverse()
      });
    }
    if (e.target.value === "faz") {
      type = "first";
      this.setState({
        employees: this.state.employees.sort(compare)
      });
    }
    if (e.target.value === "fza") {
      type = "first";
      this.setState({
        employees: this.state.employees.sort(compare)
      });
      this.setState({
        employees: this.state.employees.reverse()
      });
    }
  }

  setFilter = e => {
    this.setState({
      filterBy: e.target.value
    });
  }

  reset = () => {
    this.setState({
      filterBy: ""
    });
    this.setSort({ target: { value: "laz" } });
    
  }

  render() {
    return (
      <div>
        <ListControls reset={this.reset} setSort={this.setSort} setFilter={this.setFilter} />
        <EmployeeCard filter={this.state.filterBy} employees={this.state.employees} />
      </div>
    )
  }
}

export default EmployeeContainer;