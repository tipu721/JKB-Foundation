import React, { Component } from 'react'
import EmployeeService from './EmployeeService';

export default class EmployeeAdd extends Component {

  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  componentDidMount() {


    if (this.state.id === '_add')
      return
    EmployeeService.getEmployee(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email
      }
      );
    });
  }



  saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    }

    if (this.state.id === '_add') {
      EmployeeService.addEmployee(employee);
      window.location = '/employees'

    }

    else {
      EmployeeService.updateEmployee(this.state.id, employee)
      window.location = '/employees'

    }
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  }

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label> First Name: </label>
            <input placeholder="First Name" name="firstName" className="form-control"
              value={this.state.firstName} onChange={this.changeFirstNameHandler} />
          </div>

          <div className="form-group">
            <label> Last Name: </label>
            <input placeholder="Last Name" name="lastName" className="form-control"
              value={this.state.lastName} onChange={this.changeLastNameHandler} />
          </div>

          <div className="form-group">
            <label> Email : </label>
            <input placeholder="Email" name="email" className="form-control"
              value={this.state.email} onChange={this.changeEmailHandler} />
          </div>
          <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
        </form>
      </div>
    )
  }
}
