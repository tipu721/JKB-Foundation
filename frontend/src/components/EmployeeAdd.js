import React, { Component } from "react";
import EmployeeService from "./EmployeeService";

export default class EmployeeAdd extends Component {
  constructor(props) {
    super(props);
  }

  saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };

    console.log('employee => ' + JSON.stringify(employee));

    EmployeeService.addEmployee(employee).then(res => {
      this.props.history.push('/employees');
    });

  };

  render() {
    return (
      <div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label> First Name: </label>
              <input
                placeholder="First Name"
                name="firstName"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> First Name: </label>
              <input
                placeholder="Last Name"
                name="lastName"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label> Email Id: </label>
              <input
                placeholder="Email Id"
                name="email"
                className="form-control"
              />
            </div>
            <button
              className="btn btn-success"
              onClick={this.saveOrUpdateEmployee}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
