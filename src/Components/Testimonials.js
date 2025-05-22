import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


var testimonialsData = [
    {
        id:1,
        name: 'Mariyappan Nadar',
        description: '“I highly recommend this business.” “Their customer service is second to none.” “The product quality is consistently outstanding, exceeding my expectations every time.” “I was completely impressed with their professionalism and customer service.”',

    },
    {
        id:2,
        name: 'Chitra Mariyappan',
        description: '“I highly recommend this business.” “Their customer service is second to none.” “The product quality is consistently outstanding, exceeding my expectations every time.” “I was completely impressed with their professionalism and customer service.”',   
    },
    {
        id:3,
        name: 'Sandosh Mariyappan',
        description: '“I highly recommend this business.” “Their customer service is second to none.” “The product quality is consistently outstanding, exceeding my expectations every time.” “I was completely impressed with their professionalism and customer service.”',   
    },
]

export default function AppTestimonials() {
    return(
        <section id='testimonials' className='testimonials-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Client testimonials</h2>
                    <div className='subtitle'>what client says about us</div>
                </div>
                <Carousel controls={false}>
                    {
                        testimonialsData.map(testimonials => {
                            return(
                                <Carousel.Item key={testimonials.id}>
                                    <blockquote>
                                        <p>{testimonials.description}</p>
                                        <cite>
                                            <span className='name'>{testimonials.name}</span>
                                        </cite>
                                    </blockquote>
                                </Carousel.Item>
                            )
                        })
                    }
                    </Carousel>
            </Container>
        </section>
    )
}