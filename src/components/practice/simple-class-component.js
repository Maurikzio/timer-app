import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    handleButtonClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render = () => (
        <div>
            <p>You have clicked {this.state.count} times </p>
            <button onClick={this.handleButtonClick}>Click me!</button>
        </div>
    )
}

export default Counter;