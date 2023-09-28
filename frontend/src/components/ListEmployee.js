import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ListEmployee() {

  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, [])

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployees(result.data);
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${employee.id}`}
                  >
                    View
                  </Link>

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                  // onClick={() => deleteUser(employee.id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
