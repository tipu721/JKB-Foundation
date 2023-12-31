import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ListEmployee() {

  const [employees, setEmployees] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [departmentList, setepartmentList] = useState([]);

  useEffect(() => {
    loadEmployees();
    loadFaculties();
    loadDepartmentList();
  }, [])

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    setEmployees(result.data);
  }

  const loadDepartmentList = async () => {
    const result = await axios.get("http://localhost:8080/departmentList");
    setepartmentList(result.data);
  }

  const loadFaculties = async () => {
    const result = await axios.get("http://localhost:8080/faculties");
    setFaculties(result.data);
  }

  const deleteEmployee = async (id) => {

    await axios.delete(`http://localhost:8080/employee/${id}`);
    loadEmployees();

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
              <th scope="col">Faculty Name</th>
              <th scope="col">Department Name</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{faculties.find(item => item.id == employee.facultyId)?.facultyName}</td>
                <td>{departmentList.find(item => item.id == employee.departmentId)?.departmentName}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/view-employee/${employee.id}`}
                  >
                    View
                  </Link>

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edit-employee/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteEmployee(employee.id)}
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
