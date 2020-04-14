import React, { Component } from 'react';

export default class LyfeCycle extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.myInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 2
            })
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    render(){
        return (
            <div>
                <h3>using life cyle methods</h3>
                {/* <p>{this.state.count}</p> */}
            </div>
        )
    }
}