import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className='footer' color='red'>
                    <span className='align-content-lg-center' color='blue'>All Rights Reserved 2023 @JKB Foundation</span>
                </footer>
            </div>
        )
    }
}

export default Footer