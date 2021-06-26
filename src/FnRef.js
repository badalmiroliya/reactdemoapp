import React from 'react';
import './App.css';

class FnRef extends React.Component(){
    constructor(){
        super();
        this.userRef=React.createRef();
    }
    editVal(){
        console.warn(this.userRef);
    }
    render(){
        return(
            <div>
                <h1>What is Ref</h1>
                <input type="text" name="user" />
                <button onClick={()=>this.editVal()} >Click Me</button>
            </div>
        );
    }
}

export default FnRef;