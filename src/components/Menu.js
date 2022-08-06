import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Menu1 from '../media/Menu1.png';
import Menu3 from '../media/Menu3.png';
import Menu4 from '../media/Menu4.png';
import slide1 from '../media/slides/Slide1.PNG';
import slide2 from '../media/slides/Slide2.PNG';
import slide3 from '../media/slides/Slide3.PNG';
import slide4 from '../media/slides/Slide4.PNG';
import slide5 from '../media/slides/Slide5.PNG';
import slide6 from '../media/slides/Slide6.PNG';
import slide7 from '../media/slides/Slide7.PNG';
import slide8 from '../media/slides/Slide8.PNG';
import slide9 from '../media/slides/Slide9.PNG';
import slide10 from '../media/slides/Slide10.PNG';
import slide11 from '../media/slides/Slide11.PNG';
import slide12 from '../media/slides/Slide12.PNG';
import slide13 from '../media/slides/Slide13.PNG';
import slide14 from '../media/slides/Slide14.PNG';
import slide15 from '../media/slides/Slide15.PNG';
import slide16 from '../media/slides/Slide16.PNG';
import slide17 from '../media/slides/Slide17.PNG';
import slide18 from '../media/slides/Slide18.PNG';
import slide19 from '../media/slides/Slide19.PNG';
import slide20 from '../media/slides/Slide20.PNG';
import slide21 from '../media/slides/Slide21.PNG';
import slide22 from '../media/slides/Slide22.png';
import slide23 from '../media/slides/Slide23.PNG';
import slide24 from '../media/slides/Slide24.PNG';
import slide25 from '../media/slides/Slide25.PNG';
import slide26 from '../media/slides/Slide26.PNG';
import slide27 from '../media/slides/Slide27.PNG';
import slide28 from '../media/slides/Slide28.PNG';
import slide29 from '../media/slides/Slide29.PNG';
import '../styles/Menu.scss';


const Menu = () => {

  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const Select = (currentIndex, e) => {
    setCurrent(currentIndex)
  }


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
              <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide1}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide2}
                    alt='second Slide'
                  />
                </Carousel.Item>


                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide3}
                    alt='third Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide4}
                    alt='Fourth Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide5}
                    alt='Fifth Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide6}
                    alt='sixth Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide7}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide8}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide9}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide10}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide11}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide12}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide13}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide14}
                    alt='seventh Slide'
                  />
                </Carousel.Item>

              </Carousel>
            </Col>

            <Col sm>
              <Carousel activeIndex={current} onSelect={Select} variant="dark">

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide15}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide16}
                    alt='First Slide'
                  />
                </Carousel.Item>


                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide17}
                    alt='First Slide'
                  />
                </Carousel.Item>


              <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide18}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide19}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide20}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide21}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide22}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide23}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide24}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide25}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide26}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide27}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide28}
                    alt='First Slide'
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className='d-block w-100'
                    src={slide29}
                    alt='First Slide'
                  />
                </Carousel.Item>

                </Carousel>
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