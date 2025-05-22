import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppMenu() {
    return(
        <section id='menu' className='menu-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Discover Menu</h2>
                    <div className='subtitle'>Try your favourite one</div>
                </div>
                <Row>
                    <Col sm={6}>
                    <div>
                        <h4 id="soj">Double Chocolate Pie</h4>
                        <p id="p8">
                            Chocolate puding, vanilla, fruite rasberry jam milk
                            <span>Rs.150</span>
                        </p>
                        <hr id='hr3'></hr>
                        </div>
                        <div>
                        <h4 id="soj">Milk Shakes</h4>
                        <p id="p8">
                            Oreo Shakes, Vanilla Shakes, KitKat Shakes
                            <span>Rs.180</span>
                        </p>
                        <hr id='hr3'></hr>
                        </div>
                        <div>
                        <h4 id="soj">Mojito</h4>
                        <p id="p8">
                            Blue Lime, Cranberry, Pineapple
                            <span>Rs.175</span>
                        </p>
                        <hr id='hr3'></hr>
                        </div>
                        <div>
                        <h4 id="soj">Snacks</h4>
                        <p id="p8">
                            Puff, Samosa, Cream Bun
                            <span>Rs.100</span>
                        </p>
                        <hr id='hr3'></hr>
                    </div> 
                    </Col>
                    <Col sm={6}>
                    <div>
                        <h4 id="soj">Double Chocolate Pie</h4>
                        <p id="p8">
                            Chocolate puding, vanilla, fruite rasberry jam milk
                            <span>Rs.150</span>
                        </p>
                        <hr id='hr3'></hr>
                        </div>
                        <div>
                        <h4 id="soj">Milk Shakes</h4>
                        <p id="p8">
                            Oreo Shakes, Vanilla Shakes, KitKat Shakes
                            <span>Rs.180</span>
                        </p>
                        <hr id='hr3'></hr>
                        </div>
                        <div>
                        <h4 id="soj">Mojito</h4>
                        <p id="p8">
                            Blue Lime, Cranberry, Pineapple
                            <span>Rs.175</span>
                        </p>
                        <hr id='hr3'></hr>
                        </div>
                        <div>
                        <h4 id="soj">Snacks</h4>
                        <p id="p8">
                            Puff, Samosa, Cream Bun
                            <span>Rs.100</span>
                        </p>
                        <hr id='hr3'></hr>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}