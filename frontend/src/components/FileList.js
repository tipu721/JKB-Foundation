import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function FileList() {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        loadFiles();
    }, [])

    const loadFiles = async () => {
        const result = await axios.get("http://localhost:8080/getFiles");
        setFiles(result.data);
    }
    const handleDownload = async (fileName) => {
        alert(fileName);
        const result = await axios.get(`http://localhost:8080/download/${fileName}`);

    }
    return (
        <div>
            <h1>File List</h1>
            <ul>
                {files.map((fileName, index) => (
                    <li key={index}>{fileName}
                        <button onClick={() => handleDownload(fileName)}>Download</button>
                    </li>
                    // Replace 'file.id' and 'file.name' with the actual properties of your files
                ))}
            </ul>
        </div>
    )
}
