import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'


class NavBar extends React.Component {
    render() {
        return (
            <div>

                <Navbar fixed='top' id='navbar' expand="lg">
                <Navbar.Brand href="#home">
                        <img
                            src="https://static.beyazpano.com/assets/art/logo-en.png"
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle style={{ backgroundColor:'white', borderColor:'white',color:'white'}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{color:'white'}} id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link style={{color:'white'}} href="#home">ABOUT</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#features">HELP</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#pricing">CONTACT</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#pricing">MEDIA</Nav.Link>
                        </Nav>
                    <Button variant="outline-success">SignIn </Button>
                    </Navbar.Collapse>
                </Navbar>



                {/* <Navbar id='navbar' expand='lg'>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://static.beyazpano.com/assets/art/logo-en.png"
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link style={{color:'white'}} href="#home">ABOUT</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#features">HELP</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#pricing">CONTACT</Nav.Link>
                        <Nav.Link style={{color:'white'}} href="#pricing">MEDIA</Nav.Link>
                    </Nav>
                </Navbar> */}

            </div>
        )
    }
}


export default NavBar;