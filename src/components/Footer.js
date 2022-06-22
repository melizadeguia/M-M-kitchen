import React from 'react';
import { Container, Row} from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div>
        <div className='icons'>
            <Container>
                <Row>
                    <ul>
                        <li><a href='https://www.facebook.com/MnMKoreanKravingsatbp'><FacebookIcon fontSize='large'/></a></li>
                        <li><a href='https://www.instagram.com/mmkoreankravingsatbp/?fbclid=IwAR1tiAsQmzh25Dm2CYOD_rc8JPn1YZa7n2nx3Xc9Oz9-GKbnlQJ2pjGsK0E'><InstagramIcon fontSize='large'/></a></li>
                        <li><a href=''><CallIcon fontSize='large'/></a></li>
                    </ul>
                </Row>
            </Container>
        </div>

        <div className='copyright'>
            <Container >
                <Row>
                    <p>M&M Kitchen &copy; 2022</p>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Footer