import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import '../styles/About.scss'

const About = () => {
  return (
    <div>
      <Header />
      <div className='aboutbanner'>
        <div className='aboutbg'>
          <h1>About Us</h1>
        </div>
      </div>
      <Container>
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default About