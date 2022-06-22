import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../media/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Header.scss';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='nav' variant='dark' bg='black'>
                <Container>
                    <Navbar.Brand href="/"><img src={Logo} className='logo' alt='logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/about" >About Us</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://www.facebook.com/MnMKoreanKravingsatbp"><FacebookIcon/></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/mmkoreankravingsatbp/?fbclid=IwAR1tiAsQmzh25Dm2CYOD_rc8JPn1YZa7n2nx3Xc9Oz9-GKbnlQJ2pjGsK0E"><InstagramIcon/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header