import React, { Component } from 'react';

class Rechnen extends Component {
    state = { 
        count: 0
     }
     Reset = () => {
        this.setState({ count: 0 });
    }
     Minus = () => {
        this.setState({ count: this.state.count - 1 });
    }
    Plus = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() { 
        return (  
            <div>
            <div id="flex">
                <h1 onClick={this.Minus} >-</h1>

                <h1>{this.state.count}</h1>
                <h1 onClick={this.Plus} >+</h1>
                

            </div>
            <h1 onClick={this.Reset} >Reset</h1>
            </div>
        );
    }
}
 
export default Rechnen;