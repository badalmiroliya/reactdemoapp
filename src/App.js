import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import './App.css';
import User from './User';

import Home from './pages/home.js';

class App extends React.Component {
  constructor(){
    super();
    this.textRef=React.createRef();
    this.state={
      users:null,
      toggle: true
    }
  }
  componentDidMount(){
    fetch('https://reqres.in/api/users').then((resp)=>{
      resp.json().then((result) =>{
        this.setState({users:result.data})
      })
    })
  }
  editVal(){
      //console.warn(this.textRef);
      this.textRef.current.focus();
      this.textRef.current.value="10000";
  }
  render(){
    return (<Home/>);
    /* return(
      <div className="App">
        <h1>Fetch Data From Api</h1>
        <Container>
        {
          this.state.users ?
          this.state.users.map((item,i) =>
            <Row>
              <Col>{i}</Col>
              <Col>{item.first_name} {item.last_name}</Col>
              <Col>{item.email}</Col>
            </Row>
          )
          :null
        }
          
        </Container>
        
        <h1>User toggle (componentWillUnmount)</h1>
        {
          this.state.toggle?
          <User />
          : null
        }
        <Button onClick={()=>{this.setState({ toggle:!this.state.toggle })}}>Delete User</Button>
        
        <h1>What is Ref</h1>
        <input ref={this.textRef} type="text" name="user" />
        <button onClick={()=>this.editVal()} >Click Me</button>
    
      
      </div>
      
    ); */
  }
}

export default App;
