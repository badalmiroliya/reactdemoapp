import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';

class User extends React.Component{
    componentWillUnmount(){
        alert('user has been deleted');
    }
    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col>6</Col>
                        <Col>Badal Miroliya</Col>
                        <Col>badalmiroliya@gmail.com</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default User;