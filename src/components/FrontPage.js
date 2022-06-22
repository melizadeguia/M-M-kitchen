import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import '../styles/FrontPage.scss';
import Products from './Products';
import Reviews from './Reviews';
import Contact1 from './Contact1';

const FrontPage = () => {


    return (
        <div className='front'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <Container fluid='sm'>
                        <Row>
                            <div className='slide1'>

                            </div>
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container fluid='sm' >
                        <Row>
                            <div className='slide2'>
                                <div className='products'>
                                    <h1>
                                        OUR PRODUCTS
                                    </h1>
                                    <a href='#'><button className='btn'><span>See More</span></button></a>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container fluid='sm' >
                        <Row>
                            <div className='slide3'>
                            <div className='products'>
                                    <h1>
                                       CONTACT US
                                    </h1>
                                    <a href='#'><button className='btn'><span>See More</span></button></a>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>

            <Products/>
            <Reviews/>
            <Contact1/>
        </div>
    )
}

export default FrontPage