import React from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function AddEmployee() {

  const { id } = useParams();
  let navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    facultyId: "",
    departmentId: ""
  });

  const [faculties, setFaculties] = useState([]);
  const [departmentList, setdepartmentList] = useState([]);
  useEffect(() => {
    loadFaculties();
  }, [])

  const loadFaculties = async () => {
    const result = await axios.get("http://localhost:8080/faculties");
    setFaculties(result.data);
  }

  const loadDepartmentList = async (facultyId) => {
    console.log(facultyId);
    const result = await axios.get("http://localhost:8080/departmentList", {
      params: {
        facultyId: facultyId
      }
    });
    setdepartmentList(result.data);
  }

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onFacultyChange = async (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
    await loadDepartmentList(employee.facultyId);
  };
  const onDataSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/employee", employee);
    navigate("/");

  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

          <h2 className="text-center m-4">Add User</h2>
          <form onSubmit={(e) => onDataSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='First Name' className='form-lebel'>First Name</label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter Your First Name'
                name='firstName'
                value={employee.firstName}
                onChange={(e) => onInputChange(e)}
              ></input>
              <label htmlFor='Last Name' className='form-lebel'>Last Name</label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter Your LastS Name'
                name='lastName'
                value={employee.lastName}
                onChange={(e) => onInputChange(e)}
              ></input>

              <label htmlFor='Email' className='form-lebel'>Email</label>
              <input
                type={'text'}
                className='form-control'
                placeholder='Enter Your Email'
                name='email'
                value={employee.email}
                onChange={(e) => onInputChange(e)}
              ></input>
              <div>
                <label>Select a Faculty:</label>
                <select className="btn btn-secondary dropdown-toggle" name='facultyId' value={employee.facultyId}
                  onChange={(e) => onFacultyChange(e)}>
                  <option value="">Select an option</option>
                  {faculties.map((faculty) => (
                    <option key={faculty.id} name='facultyId' value={faculty.id}>
                      {faculty.facultyName}
                    </option>
                  ))}
                </select>
              </div>
              <div>

                <label>Select a Department:</label>
                <select className="btn btn-secondary dropdown-toggle" name='departmentId' value={employee.departmentId}
                  onChange={(e) => onInputChange(e)}>
                  <option value="">Select an option</option>
                  {departmentList.map((department) => (
                    <option key={department.id} name='departmentId' value={department.id}>
                      {department.departmentName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>

          </form>
        </div>
      </div >
    </div >
  )
}
