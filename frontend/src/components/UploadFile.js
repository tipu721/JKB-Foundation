import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileChangedHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const uploadHandler = async () => {
        if (!selectedFile) {
            alert('No file selected.');
            console.error('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post("http://localhost:8080/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data);
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={fileChangedHandler} />
            <button onClick={uploadHandler}>Upload</button>
        </div>
    );
};

export default FileUpload;
