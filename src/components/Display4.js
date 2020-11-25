import React, { Component } from 'react';

class Display4 extends Component {
    state2 = {
        DISPLAYview2 : false,
             }
     handleDisplay4 = () =>{
       this.setState({ DISPLAYview2 : !this.state.DISPLAYview2 });
        }
        
        
    render() { 
        return ( 
            <div  style={{ display: this.state.DISPLAYview2 ? "block" : "none" }}>
    <h3 >{this.props.info.answerLong}  </h3> </div>
         );
    }
}
 
export default Display4;