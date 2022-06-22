import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import '../styles/FrontPage.scss';
import Products from './Products';
import Reviews from './Reviews';
import Contact1 from './Contact1';
import Footer from './Footer';

const FrontPage = () => {


    return (
        <div className='front'>
            <div className='carousel'>
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
            </div>


            <Products />
            <Reviews />
            <Contact1 />
            <Footer/>
        </div>
    )
}

export default FrontPage