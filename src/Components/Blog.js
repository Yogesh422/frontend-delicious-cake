import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
    {
        id:1,
        image: require('../assets/images/weighter.jpg'),
        time: '15, July 2024',
        title: 'Bake Memories, Cookie at a Time..,',
        description: 'A cookie is a baked snack or dessert that is typically small, flat, and sweet. It usually contains flour, egg. It may include other ingredients such as chocolate chips.',
        link: 'http://localhost:3000/',
    },
    {
        id:2,
        image: require('../assets/images/cookies.jpg'),
        time: '15, July 2024',
        title: 'Baking Cokkies..,',
        description: 'Cookies are baked goods made of flour, eggs, sugar and oil or butter. It usually contains flour, sugar, egg, and some type of oil, fat, or butter. It may include other ingredients such as raisins, oats, chocolate chips, or nuts.',
        link: 'http://localhost:3000/',
    },
    {
        id:3,
        image: require('../assets/images/img3.jpg'),
        time: '15, July 2024',
        title: 'Supplies something such as equipment to customers..,',
        description: 'A supplier is a person, company, or organization that sells or supplies something such as goods or equipment to customers. It may include other ingredients such as oats.',
        link: 'http://localhost:3000/',
    },
]

export default function AppBlog() {
    return(
        <section id='blog' className='block blog-block'>
            <Container>
            <div className='title-holder'>
                <h2>Latest from blog</h2>
                <div className='subtitle'>get our latest news from blog</div>
                </div>
                <Row>
                    {
                        blogData.map(blog => {
                            return(
                                <Col sm={4} key={blog.id}>
                                    <div className='holder'>
                                    <Card>
                                        <Card.Img variant="top" src={blog.image} />
                                        <Card.Body>
                                            <time>{blog.time}</time>
                                            <Card.Title>{blog.title}</Card.Title>
                                            <Card.Text>
                                            {blog.description}
                                            </Card.Text>
                                            <a href={blog.link} className='btn btn-primary'>Read More <i className="fas fa-chevron-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}