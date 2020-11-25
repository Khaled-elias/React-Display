import React, { Component } from 'react';






class Display3 extends Component {
    state ={
        DISPLAYview : false,
             } 
                 
    state2 = {
        DISPLAYview2 : false,
             }
      
                 
        
     
     
         
    
    handleDisplay3 = () =>{
        this.setState({ DISPLAYview : !this.state.DISPLAYview });
     }
     handleDisplay4 = () =>{
        this.setState({ DISPLAYview2 : !this.state.DISPLAYview2 });
       }
    
    render() { 
        return ( 
            <div>
                
               
                <div>
                <h3>{this.props.info.question} <button onClick={this.handleDisplay3}>+</button></h3>
                   
        <div style={{ display: this.state.DISPLAYview ? "block" : "none" }}><h3>{this.props.info.answer}  <button onClick={this.handleDisplay4}>+</button></h3>


<div  style={{ display: this.state.DISPLAYview2 ? "block" : "none" }}>
    <h3 >{this.props.info.answerLong}  </h3> </div> </div>
        
                    
        

                </div>
                    
                   
               
                
            </div>
            // <div >{user.answer}</div><div>{user.answerLong}</div>
         );
    }
}
 
export default Display3;
