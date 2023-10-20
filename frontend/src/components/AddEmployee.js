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
    faculty: ""
  });

  const [faculties, setFaculties] = useState([]);
  useEffect(() => {
    loadFaculties();
  }, [])
  const loadFaculties = async () => {
    const result = await axios.get("http://localhost:8080/faculties");
    setFaculties(result.data);
  }
  const onInputChange = (e) => {

    setEmployee({ ...employee, [e.target.name]: e.target.value });
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
              <label htmlFor="Department">Select a Department    </label>
              <select
                className='btn-secondary dropdown-toggle'
                name="department"
                value={employee.faculty}
                onChange={(e) => onInputChange(e)}>
                <option value="">Select a Faculty</option>
                {faculties.map((faculty) => (
                  <option key={faculty.id} value={faculty.id}>
                    {faculty.facutiName}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>

          </form>
        </div>
      </div>
    </div>
  )
}
