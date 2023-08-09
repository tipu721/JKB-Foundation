import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
class ViewEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}

        }

    }
    componentDidMount() {
        EmployeeService.getEmployee(this.state.id).then(res => {
            this.setState({ employee: res.data });


        })
    }

    render() {
        return (
            <div>
                <h3 className="text-center"> View Employee Details</h3>
                <div className='card-body'>
                    <div className="row">
                        <label> Employee First Name: </label>
                        <div> {this.state.employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: </label>
                        <div> {this.state.employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Email ID: </label>
                        <div> {this.state.employee.email}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ViewEmployee
