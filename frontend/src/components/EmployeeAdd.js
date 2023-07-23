import React, { Component } from 'react'
import EmployeeService from './EmployeeService';

export default class EmployeeAdd extends Component {

  constructor(props) {
    super(props)
  }

  saveOrUpdateEmployee(e) {
    e.preventDefault();

    alert('You are adding a employee!')

    var employee = {
      firstName: 'Tipu',
      lastName: 'Sultan',
      email: 'sultan@gmail.com'
    }

    EmployeeService.addEmployee(employee);
    window.location = 'employees'


  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label> First Name: </label>
            <input placeholder="First Name" name="firstName" className="form-control" />
          </div>

          <div className="form-group">
            <label> Last Name: </label>
            <input placeholder="Last Name" name="lastName" className="form-control" />
          </div>

          <div className="form-group">
            <label> Email : </label>
            <input placeholder="Email" name="email" className="form-control" />
          </div>


          <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
        </form>
      </div>
    )
  }
}
