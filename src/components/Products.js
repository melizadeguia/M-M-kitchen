import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Products.scss';
import prod1 from '../media/product1.jpg';
import prod2 from '../media/product2.jpg';
import prod3 from '../media/product3.jpg';

const Products = () => {
    return (
        <div className='products'>
            <Container>
                <div className='title'>
                    <div className='titletext'>
                        <h1>
                            Products
                        </h1>
                    </div>
                </div>
                
                    <Row>
                        <Col sm>
                            <Card >
                                <Card.Img variant="top" src={prod1} />
                                <Card.Body>
                                    <Card.Title>Food Name</Card.Title>
                                    <Card.Text>
                                       Description here 
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card >
                                <Card.Img variant="top" src={prod2} />
                                <Card.Body>
                                    <Card.Title>Food Name</Card.Title>
                                    <Card.Text>
                                       Description here
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm>
                            <Card>
                                <Card.Img variant="top" src={prod3} />
                                <Card.Body>
                                    <Card.Title>Food Name</Card.Title>
                                    <Card.Text>
                                       Description here
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}

export default Products