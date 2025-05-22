import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import img1 from '../assets/images/img2.jpg'

export default function AppAbout() {
    return(
        <section id='about' className='block about-block'>
            <Container>
                <div className='title-holder'>
                    <h2>About Us</h2>
                    <div className='subtitle'>learn more about us</div>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image className='mt-2' src={img1} />
                    </Col>
                    <Col sm={6}>
                        <div className="main_title">
                            <h2 id="he1" className="mt-2">Welcome to our Bakery  ___</h2>
                            <p id="p3">We are so excited you are a part of Delicious Bakery. We love you dearly. 
                        We are offering you a 20% discount for the first month. Grab the offer now!</p>
                        </div>
                    <div className="welcome_left_text">
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because 
                        occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, 
                        which of us ever undertakes laborious physical exercise.
                    </div>
                    <Button className='mt-2' variant="primary">Know more about us</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}