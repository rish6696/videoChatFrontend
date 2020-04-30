import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import '../components/style.css'

function LogInModal(props) {
    const { onHide, show, signupfromlogin, forgotpasswordfromlogin } = props

    const onSignInGoogle = async () => {
        console.log("clcicked")
        try {

            const { data } = await axios.get('http://192.168.0.105:5896/getAuth', {
                headers: {
                    'Content-Type': 'application/json'
                },
                crossdomain: true
            })
            window.open(data);
        } catch (e) {
            console.log(e);
        }
    }

    const responseGoogle=(data)=>{
        axios.post('http://192.168.0.105:5896/redirect',{code:data})
        .then(x=>x.data)
        .then(x=>{
            console.log(x);
        })
        .catch(e=>{
            console.log(e)
        })

    }
    return (
        <Modal
            onHide={onHide}
            show={show}
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
                            <GoogleLogin
                                clientId="430706519339-mkihfr510279kro24vfmvc5o0ql69ovh.apps.googleusercontent.com"
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                responseType='code'
                            />,
                            {/* <GoogleButton onClick={onSignInGoogle} style={{ width: '100%',marginBottom:'15px' }} ></GoogleButton> */}
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
                                <Button style={{ width: '100%' }} variant="primary" type="submit">
                                    Login
                                 </Button>
                            </Form>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '5px', marginBottom: '5px' }} className='justify-content-center'>
                        <Col style={{ textAlign: 'center' }} >
                            <span>or </span>
                            <a onClick={forgotpasswordfromlogin} href='#forgotpassword' style={{ fontSize: '10px' }} >Forgot Password</a>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: '5px', marginBottom: '5px' }} className='justify-content-center'>
                        <Col style={{ textAlign: 'center' }} >
                            <span style={{ fontSize: '10px' }} > Dont Have an Account ? </span>
                            <a onClick={signupfromlogin} href='#forgotpassword' style={{ fontSize: '10px' }} >Sign Up</a>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}


export default LogInModal;