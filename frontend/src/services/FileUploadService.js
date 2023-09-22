
import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:8080";
import React, { Component } from 'react'

class FileUploadService extends Component {
    upload(file, onUploadProcess) {
        let formData = new FormData();

        formData.append("file", file);
        return axios.post("/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            onDownloadProgress,
        });

    }
    getFiles() {
        return axios.get("files")
    }
}
