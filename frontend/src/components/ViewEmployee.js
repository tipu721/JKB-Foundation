import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewEmployee() {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: "",
        facultyId: ""
    });
    const [faculty, setFaculty] = useState({

        facultyName: ""
    });

    const { id } = useParams();
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {

        try {
            await loadEmployee();
            await loadFaculty();
        }
        catch {
            if (faculty.facultyName == null)
                faculty.facultyName = "";
        }
    }
    let fId;
    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employee/${id}`);
        const emp = result.data;
        fId = emp.facultyId;
        setEmployee(result.data);

    }
    const loadFaculty = async () => {
        loadEmployee();
        console.log(fId);
        const result = await axios.get(`http://localhost:8080/faculty/${fId}`);
        setFaculty(result.data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Employee Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {employee.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>First Name:</b>
                                    {employee.firstName
                                    }
                                </li>
                                <li className="list-group-item">
                                    <b>Last Name:</b>
                                    {employee.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>Email:</b>
                                    {employee.email}
                                </li>
                                <li className="list-group-item">
                                    <b>Faculty: </b>
                                    {faculty.facultyName}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
