import React, { Component } from 'react'

export default class Practice extends Component {
    constructor(props) {
        super(props);


    }

    add() {

        let n1 = 5;
        let n2 = 6;
        let ans = n1 + n2;
        alert(ans);


    }

    render() {
        return (
            <div>
                <lebel>input1</lebel>
                <input type='text'></input><br />
                <lebel>input2</lebel>
                <input type='text'></input><br />
                <lebel>result</lebel>
                <input type='text'></input><br />
                <button onClick={this.add}>click me</button>
            </div>
        )
    }
}
