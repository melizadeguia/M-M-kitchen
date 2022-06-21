import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Carousel, Button } from 'react-bootstrap';
import '../styles/FrontPage.scss';
import Products from './Products';
import Reviews from './Reviews'

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
                                    <a href='#'><button>See More</button></a>
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
                                    <a href='#'><button>See More</button></a>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>

            <Products/>
            <Reviews/>
        </div>
    )
}

export default FrontPage