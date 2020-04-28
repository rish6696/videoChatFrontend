import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import '../components/style.css'

function LogInModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="modal-30w"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span style={{ fontSize: '15px' }} >Log In to your EasyClass Account</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <GoogleButton style={{ width: '100%',marginBottom:'15px' }} ></GoogleButton>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button style={{width:'100%'}} variant="primary" type="submit">
                                    Login
                                 </Button>
                            </Form>
                        </Col>
                    </Row>

                    <Row style={{marginTop:'5px',marginBottom:'5px'}} className='justify-content-center'>
                        <Col style={{textAlign:'center'}} >
                            <span>or </span>
                            <a  href='#forgotpassword' style={{fontSize:'10px'}} >Forgot Password</a>
                        </Col>
                    </Row>

                    <Row style={{marginTop:'5px',marginBottom:'5px'}} className='justify-content-center'>
                        <Col style={{textAlign:'center'}} >
                            <span style={{fontSize:'10px'}} > Dont Have an Account ? </span>
                            <a onClick={props.signUpFromLogin} href='#forgotpassword' style={{fontSize:'10px'}} >Sign Up</a>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}


export default LogInModal;