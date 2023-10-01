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
        try {
            const response = await fetch(`http://localhost:8080/download/${fileName}`); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName; // Use the specified file name
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading file: ', error);
        }
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
