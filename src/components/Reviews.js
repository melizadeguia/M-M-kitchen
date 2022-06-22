import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Carousel, Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import review1 from '../media/Reviews/review1.jpg';
import review2 from '../media/Reviews/review2.jpg';
import review3 from '../media/Reviews/review3.jpg';
import review4 from '../media/Reviews/review4.jpg';
import review5 from '../media/Reviews/review5.jpg';
import '../styles/Reviews.scss'

const Reviews = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div className='reviews'>
      <Container>
        <div className='title'>
          <div>
              <h1>Reviews</h1>
          </div>
        </div>
        <Row>
          <Col sm>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review1}
                  alt="First slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review2}
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review3}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review4}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={review5}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>

          </Col>

          <Col sm>
            <div className='card'>
              <Card >
                <Card.Body>
                  <Card.Title> <Rating name="read-only" value={5} readOnly /> </Card.Title>
                  <Card.Text>
                    <div className='text'>
                      <h3>
                        "If you love Korean food, you have to try M&M Korean Kravings atbp. <br />
                        Generous serving, intense flavor, excellent taste and customer service that goes beyond expectations. I have na my favorite Korean food go-to na!"
                      </h3>
                      <br />
                      <h5>-Gail Hecali</h5>
                    </div>
                  </Card.Text>

                  <br />

                  <Card.Title> <Rating name="read-only" value={5} readOnly /> </Card.Title>
                  <Card.Text>
                    <div className='text'>
                      <h3>
                        "Guys!! Please try! <br/>
                        I highly recommend their supper yummy korean food. absolutely delicious and worth the price"
                      </h3>
                      <br />
                      <h5>-Maricrisse Esquillo Garcia</h5>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Reviews