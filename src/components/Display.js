import React, { Component } from 'react';
import Display2 from './Display2';

class Display extends Component {
    state = { 
        DISPLAYview : false,
        
     }
     handleDisplay = () =>{
        this.setState({ DISPLAYview : !this.state.DISPLAYview });
     }
    
    render() { 
        return ( 
            <div>
                 <h2>Why is React great</h2>
                <button onClick={this.handleDisplay}>+</button>
                <div style={{ display: this.state.DISPLAYview ? "block" : "none" }}><h3 > Fast Learning Curve </h3> <Display2   style={{ display: this.state.DISPLAYview ? "block" : "none" }}/></div>
                
             
            </div>
         );
    }
}
 
export default Display;