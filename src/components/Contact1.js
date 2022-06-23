import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact1.scss'

const Contact1 = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col sm>
                    <div className='area'>
                        <div>
                            <h1>Ready to Satisfy your Kravings?</h1>
                            <h3>Order Now!</h3>
                            <a href='/contact'><button className='btn'><span>Contact Us</span></button></a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Contact1