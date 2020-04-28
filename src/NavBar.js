import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'
import LogInModal from './components/loginModal'
import SignUpModal from './components/signUpModal'


class NavBar extends React.Component {
    state={showLogin:false,showSignUp:false}

    onClickLogin=()=>{
        this.setState({showLogin:true})
    }

    onHideLogin=()=>{
        this.setState({showLogin:false})
    }

    onClickSignUp=()=>{
        this.setState({showSignUp:true})
    }

    onHideSignUp=()=>{
        this.setState({showSignUp:false})
    }

    signUpOnLogin=()=>{
        this.setState({showLogin:false,showSignUp:true})
    }

    loginfromSignUp=()=>{
        this.setState({showLogin:true,showSignUp:false})
    }
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
                    <Button onClick={this.onClickLogin} style={{margin:'5px'}} variant="outline-success">Login</Button>
                    <Button onClick={this.onClickSignUp} style={{margin:'5px'}} variant="outline-success">SignUp</Button>
                    <LogInModal signUpFromLogin={this.signUpOnLogin}  onHide={this.onHideLogin} show={this.state.showLogin}  ></LogInModal>
                    <SignUpModal loginfromSignUp={this.loginfromSignUp}  onHide={this.onHideSignUp} show={this.state.showSignUp}  ></SignUpModal>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


export default NavBar;