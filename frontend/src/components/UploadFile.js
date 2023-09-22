import React, { Component } from 'react'

export default class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {

            selectedFile: undefined,
            currentFile: undefined,
            process: 0,
            message: "",
            fileInfos: []

        }
    }
    render() {
        return (
            <div>UploadFile</div>
        )
    }
}
