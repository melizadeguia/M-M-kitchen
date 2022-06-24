import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Menu1 from '../media/Menu1.png';
import Menu3 from '../media/Menu3.png';
import Menu4 from '../media/Menu4.png';
import '../styles/Menu.scss';

const Menu = () => {

  return (
    <div>
      <Header />
      <div className='aboutbanner'>
        <div className='aboutbg'>
          <h1>Our Products</h1>
        </div>
      </div>

      <div className='menuarea'>
        <Container>
          <Row>
            <Col sm>
              <img src={Menu1} alt='menu' />
            </Col>
            <Col sm>
              <img src={Menu3} alt='menu' />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <img src={Menu4} alt='menu' />
            </Col>
            <Col sm>
              <div className='menuorder'>
                <div>
                  <h1>Satisfy your Kravings</h1>
                  <h3>Order Now!</h3>
                  <a href='/contact'><button className='btn'><span>Contact Us</span></button></a>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

      <Footer />
    </div>
  )
}

export default Menu