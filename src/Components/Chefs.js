import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/chef1.jpg';
import img2 from '../assets/images/chef2.jpg';
import img3 from '../assets/images/chef3.jpg';

const chefsData = [
    {
        id: 1,
        link: 'https://www.google.com/search?sca_esv=53dc40f9498de961&sca_upv=1&cs=1&q=Vikas+Khanna&stick=H4sIAAAAAAAAAE2TT27UMBTGGTRFQzqFNTvEAZjYju1EoG4QC4RUgVQhdRWNk9omf6wkEzmOxQ1gxQ3gBByBc7Biw2bgBF3RFuE3y5-f9d73fc9eoSeL-Gpx9EJfyt3V3VX-8uz81flF_m252C-Po_ubdhML2VIaCHumeSDUzp3eL9dRdEO1ZUlhQjGJ27EORe0HVthQTKVSLhDZxXwORBvCskBMlFqENoqmo7fQlZgszgM2qcGZDFhhwSkCzInvGpCLmzJLAzrkGR1BBJ2mIRC3s7k2ehId39rGSuREgdORDyY0SkzSc79fPoxONmqDkKy47tpyhpMhHx1PR7CBqUUyBuR4xvMBUnZj8v8KHBcEokMMgQmi-pK3MKkgExUNTsFWzZoObO0qwWDTNvNFoGLwBoaWpUOg1-NWWh-QOplafTjVYJdOkDx21CQjqNRJTa_DfRCtb--Tviv7Fof6Tum-hECprxOfBBxkRhpYTRlXRQvvQxqrJ5AiCqYb5Q-0FokoanjBzjmYZKhllf96tH73vt7uHr_WW2O2P-49uvPx1ydy-vznb_W9-_D07SV6c3axmv98efZ59e_v_AVBwUeFSQMAAA&sa=X&ved=2ahUKEwien-3ksryHAxU_1TgGHT0VATUQpeMCegUIABDQBA&biw=1366&bih=633&dpr=1',
        image: img1,
        title: 'Vikas Khanna',
        subtitle: 'Baker',
    },
    {
        id: 2,
        link: 'https://www.google.com/search?sa=X&sca_esv=53dc40f9498de961&sca_upv=1&cs=1&biw=1366&bih=633&q=Giada+De+Laurentiis&stick=H4sIAAAAAAAAAE2TT27UMBTGmWpaDWkLC1bsKg7AxHZsJwKxoQghoQqkbrqKxsk4nvyx8q-JY_UGsEDcAE7AETgHKzZsBk7QFW0RfrP8-Vnvfd_37AV6skfQ9Wz_pVrL7npvEb86O39zfhF_m8-280Pv_rJa-kJWlDrClinuCFVTrbbzI8-7pWJgQaJdMfCrvnBFZVuWDK4Yyiwzjkjn88kRLQmLHDGRKuHaZDTs7QBdiY782GEZahxJhzkWnCLAmNi6BLm4TKPQoUGW0R5E0HFsHfFh0jdGj73DO9s4EzHJwGnPW-0aBTpouN3OH3rHy2yJkMy5qqt0gpM27g0Pe7CB6YCkD8jxhKcdpOzW5P8VGC4IRIcYAhMka1JewaSEjFSUOARbBStrsNXlgsGmh8gmjpLWahiapgaBXosrOViH1MhwULtTNTbhCMljQ3XQg0oVFPQm3Afe0d190tRpU2FX7zLVpBAotUVgA4etjEgJq0n9PKngfUg9qBGkiISpMrM7WpNAJAW8YGMMTNJ0YLn9uv_o9WaVrk5O1ydvV5ftWvebTffpYPbj4PG9D78-khfPf_7OvtdXT9-v0buzi8X058uzz4t_v-gvN9FKXVQDAAA&lei=NTufZsi4E5qF4-EPn4-ggQ4',
        image: img2,
        title: 'Giada De Laurentiis',
        subtitle: 'Chef',
    },
    {
        id: 3,
        link: 'https://www.google.com/search?sca_esv=53dc40f9498de961&sca_upv=1&cs=1&q=Vikas+Khanna&stick=H4sIAAAAAAAAAE2TT27UMBTGGTRFQzqFNTvEAZjYju1EoG4QC4RUgVQhdRWNk9omf6wkEzmOxQ1gxQ3gBByBc7Biw2bgBF3RFuE3y5-f9d73fc9eoSeL-Gpx9EJfyt3V3VX-8uz81flF_m252C-Po_ubdhML2VIaCHumeSDUzp3eL9dRdEO1ZUlhQjGJ27EORe0HVthQTKVSLhDZxXwORBvCskBMlFqENoqmo7fQlZgszgM2qcGZDFhhwSkCzInvGpCLmzJLAzrkGR1BBJ2mIRC3s7k2ehId39rGSuREgdORDyY0SkzSc79fPoxONmqDkKy47tpyhpMhHx1PR7CBqUUyBuR4xvMBUnZj8v8KHBcEokMMgQmi-pK3MKkgExUNTsFWzZoObO0qwWDTNvNFoGLwBoaWpUOg1-NWWh-QOplafTjVYJdOkDx21CQjqNRJTa_DfRCtb--Tviv7Fof6Tum-hECprxOfBBxkRhpYTRlXRQvvQxqrJ5AiCqYb5Q-0FokoanjBzjmYZKhllf96tH73vt7uHr_WW2O2P-49uvPx1ydy-vznb_W9-_D07SV6c3axmv98efZ59e_v_AVBwUeFSQMAAA&sa=X&ved=2ahUKEwien-3ksryHAxU_1TgGHT0VATUQpeMCegUIABDQBA&biw=1366&bih=633&dpr=1',
        image: img3,
        title: 'Amaury Guichon',
        subtitle: 'Chef',
    },
]

export default function AppChefs() {
    return (
        <section id="chefs" className='block chefs-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Our Chefs</h2>
                    <div className='subtitle'>our awesome chefs</div>
                </div>
                <Row className='portfoliolist'>
                    {
                        chefsData.map(chefs => (
                            <Col sm={4} key={chefs.id}>
                                <div className='portfolio-wrapper'>
                                    <a href={chefs.link}>
                                        <Image src={chefs.image} />
                                        <div className='label text-center'>
                                            <h3>{chefs.title}</h3>
                                            <p>{chefs.subtitle}</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                <p id='p1'>
                    "I believe that there is always something new to learn, in fact, 
                    that is one of the three reasons that I chose to become a chef, that my education is never over."
                </p>
            </Container>
        </section>    
    )
}
