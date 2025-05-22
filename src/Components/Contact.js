import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function AppContact() {
    return(
        <section id='contact' className='block contact-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <div className='subtitle'>get connected with us</div>
                </div>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                        <Form.Control type='text' placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type='email' placeholder="Enter your email address" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type='tel' placeholder="Enter your contact number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Enter your message" required />
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type='submit'>Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className='google-map'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.581581845704!2d79.79127567403276!3d11.86453443818404!
            2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a549f12b0a6f549%3A0xb787f72f2fd455f1!2sCITADEL%20MANAGEMENT%20SERVICES!5e0!3m2!1sen!2sin!4v1721811416901!5m2!1sen!2sin" 
            allowFullScreen="{true}" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            000-000-0000
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            Thavalakuppam, Puducherry
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}