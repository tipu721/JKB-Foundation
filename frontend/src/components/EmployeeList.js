import React, { Component } from 'react';
import EmployeeService from './EmployeeService';

export default class EmployeeList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []

        }

    }



    addEmployee() {
        //this.props.history.push('/add-employee/_add');

        window.location = '/add-employee/_add'
    }


    editEmployee(id) {
        //this.props.history.push(`/add-employee/${id}`);
        window.location = `/add-employee/${id}`
    }

    viewEmployee(id) {
        //this.props.history.push(`/view-employee/${id}`); //dont hit
        window.location = `/view-employee/${id}`
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) })
        })

    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                </div>


                <div className='row'>

                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(

                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button onClick={() => this.editEmployee(employee.id)} className='brn btn-info'>Edit</button>
                                                <button style={{ marginLeft: '10px' }} onClick={() => this.deleteEmployee(employee.id)} className='brn btn-danger'>Delete</button>
                                                <button style={{ marginLeft: '10px' }} onClick={() => this.viewEmployee(employee.id)} className='brn btn-info'>View</button>
                                            </td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}
