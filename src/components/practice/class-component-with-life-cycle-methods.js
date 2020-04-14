import React from 'react';

class CounterWithLifeCycleMethods extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount(){
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 5000);
    }

    componentWillUnmount(){
        this._interval = clearInterval(this._interval);
    }

    // _interval

    render = () => (
        <div>
            <h3>class component with life-cycle methods</h3>
            <p>Count incremented {this.state.count} times</p>
        </div>
    )   
}

export default CounterWithLifeCycleMethods;