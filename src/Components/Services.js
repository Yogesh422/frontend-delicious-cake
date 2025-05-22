import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData =[
    {
        id:1,
        icon:'fas fa-plug',
        title: 'SEO Optimized',
        description: "Celebrations bring joy, uniting family and friends. It's a time for cake, gifts, and wishes, adding to the day's excitement."
    },
    {
        id:2,
        icon:'fas fa-plug',
        title: 'SEO Optimized',
        description: "Celebrations bring joy, uniting family and friends. It's a time for cake, gifts, and wishes, adding to the day's excitement."
    },
    {
        id:3,
        icon:'fas fa-life-ring',
        title: 'Customer Support',
        description: "Celebrations bring joy, uniting family and friends. It's a time for cake, gifts, and wishes, adding to the day's excitement."
    },
]

export default function Appservices() {
    return(
        <section id="services" className='block services-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Our Services</h2>
                    <div className='subtitle'>services we provide</div>
                </div>
                <Row>
                    {
                        servicesData.map(services => {
                            return(
                                <Col sm={4} className='holder' key={services.id}>
                                    <div className='icon'>
                                        <i className={services.icon}></i>
                                    </div>
                                    <h3>{services.title}</h3>
                                    <p>{services.description}</p>
                                </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </section>
    )
}