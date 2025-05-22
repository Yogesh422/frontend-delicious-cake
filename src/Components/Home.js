import { useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AppAbout from './About';
import Appservices from './Services';
import AppBlog from './Blog';
import AppContact from './Contact';
import AppChefs from './Chefs';


var homeData = [
    {
        id: 1,
        image: require('../assets/images/slide15.jpg'),
        title: 'Quality Cakes with sweet, eggs & breads',
        description: 'We are so excited you are a part of Delicious Bakery. We love you dearly. We are offering you a 20% discount for the first month. Grab the offer now!',
        link: 'http://localhost:3001/'
      },
      {
        id: 2,
        image: require('../assets/images/slide14.jpg'),
        title: 'Cake bakery.., make delicious products',
        description: 'A cookie is a baked snack or dessert that is typically small, flat, and sweet.',
        link: 'http://localhost:3001/'
      },
      {
        id: 3,
        image: require('../assets/images/slider-1.webp'),
        title: 'Enjoy your favourite one..,',
        description: 'A supplier is a person, company, or organization that sells or supplies something such as goods or equipment to customers.',
        link: 'http://localhost:3001/'
      }
]

const Home = () => {
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const blogRef = useRef(null);
    const contactRef = useRef(null);
    const chefsRef = useRef(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#about') {
                aboutRef.current.scrollIntoView({ behavior: 'smooth' });
              } else if (hash === '#services') {
                servicesRef.current.scrollIntoView({ behavior: 'smooth' });
              } else if (hash === '#blog') {
                blogRef.current.scrollIntoView({ behavior: 'smooth' });
              } else if (hash === '#contact') {
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
              }
              else if (hash === '#chefs') {
                chefsRef.current.scrollIntoView({ behavior: 'smooth' });
              }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return() => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    },[]);
    return(
        <main>
        <section className='home-block'>
            <Carousel>
                {
                    homeData.map(home => {
                        return(
                            <Carousel.Item key={home.id}>
                                <img 
                                    className='d-block w-100'
                                    src={home.image}
                                    alt={"slide" + home.id}
                                />
                    <Carousel.Caption>
                        <h3>{home.title}</h3>
                        <p>{home.description}</p>
                        <a className='btn btn-primary' href={home.link}>See the recipe <i className='fas fa-chevron-right'></i></a>
                    </Carousel.Caption>
                </Carousel.Item>
                        )
                    })
                }
                
            </Carousel>
        </section>
        {/* <Outlet /> */}
    <section id="about" ref={aboutRef}>
        <AppAbout />
      </section>
      <section id="services" ref={servicesRef}>
        <Appservices />
      </section>
      <section id="chefs" ref={chefsRef}>
        <AppChefs />
      </section>
      <section id="blog" ref={blogRef}>
        <AppBlog />
      </section>
      <section id="contact" ref={contactRef}>
        <AppContact />
      </section>
        </main>
    )
}

export default Home