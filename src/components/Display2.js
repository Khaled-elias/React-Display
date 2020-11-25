import React, { Component } from 'react';


class Display2 extends Component {
    state = { 
        DISPLAYview2 :false
     }
     handleDisplay2 = () =>{
        this.setState({ DISPLAYview2 : !this.state.DISPLAYview2 });
     }
    render() { 
        return ( 
            <div>
                <button onClick={this.handleDisplay2}>+</button>
                 <div  style={{ display: this.state.DISPLAYview2 ? "block" : "none" }}>
                     <h3 > React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial.
                As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it.

                </h3> </div>
                
            </div>
         );
    }
}
 
export default Display2;




