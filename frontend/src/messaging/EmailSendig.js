import { React, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function EmailSendig() {

    const [details, setDetails] = useState({
        recipient: "",
        msgBody: "",
        subject: ""
    });


    const onInputChange = (e) => {

        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const onDataSubmit = async (e) => {
        e.preventDefault();
        const result = await axios.post("http://localhost:8080/sendMail", details);
        alert(result.data);


    }



    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                    <h2 className="text-center m-4">Send Mail</h2>
                    <form onSubmit={(e) => onDataSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Recipient' className='form-lebel'>Recipient</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter Your First Name'
                                name='recipient'
                                value={details.recipient}
                                onChange={(e) => onInputChange(e)}
                            ></input>
                            <label htmlFor='Message Body' className='form-lebel'>Message Body</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter Your LastS Name'
                                name='msgBody'
                                value={details.msgBody}
                                onChange={(e) => onInputChange(e)}
                            ></input>

                            <label htmlFor='Subject' className='form-lebel'>Subject</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Subject'
                                name='subject'
                                value={details.subject}
                                onChange={(e) => onInputChange(e)}
                            ></input>
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
