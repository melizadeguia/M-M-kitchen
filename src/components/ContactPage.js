import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import BusinessIcon from '@mui/icons-material/Business';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import '../styles/ContactPage.scss';

const ContactPage = () => {
  return (
    <div>
      <Header />
      <div className='banner'>
        <div className='bg'>
          <h1>Contact Us</h1>
        </div>
      </div>
      <Container>
        <Row>
          <Col sm>
            <div className='contact'>
              <div className='contactinfo'>
                <h2>Order Now!</h2>
                <ul>
                  <li><BusinessIcon /> Address: Unit 4210 Tower 3 light residences
                    Madison cor Boni Avenue Mandaluyong City</li>
                  <li><FacebookIcon /> <a href='https://www.facebook.com/MnMKoreanKravingsatbp'>facebook.com/MnMKoreanKravingsatbp</a></li>
                  <li><InstagramIcon /> <a href='https://www.instagram.com/mmkoreankravingsatbp/?fbclid=IwAR0p_FRoLoueplCpDTElUeBw0M46aSHsXEUVEdhj0EBXz6WnWCH0ndDBwJY'> instagram.com/mmkoreankravingsatbp</a></li>
                  <li><CallIcon /> (0945) 719 3534 /
                    (0947) 895 2911</li>
                  <li><EmailIcon /> mmkoreankravingsatbp@gmail.com</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm>
            <div className='maps'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.4412596193815!2d121.04693396498968!3d14.573914231636898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e89f898bf9%3A0xf1e2fb52554a0a5f!2sSMDC%20Light%20Residences%20Tower%203!5e0!3m2!1sen!2sph!4v1655990913905!5m2!1sen!2sph" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default ContactPage