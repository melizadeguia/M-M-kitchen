import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../media/logo.png';
import '../styles/Header.scss'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav' variant='dark' bg='black'>
                <Container>
                    <Navbar.Brand href="#home"><img src={Logo} className='logo' alt='logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" >About Us</Nav.Link>
                            <Nav.Link href="#pricing">Products</Nav.Link>
                            <Nav.Link href="#pricing">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Facebook</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header