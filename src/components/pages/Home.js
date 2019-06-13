import React  from 'react';
import { Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className="home-container">
      <h1>WELCOME!</h1>
      <Row>
        <Col xs={12}>
          <p>
            Established in 2016, 6061 Forged Rims has been at the forefront of wheel
            customization. Beginning as a wheel specific workshop, and
            then transitioning into a online shop offering refinishing and resizing
            services, we are now dedicated to offering the highest quality
            aftermarket wheel parts at a wholesale and retail level. We have
            extensive knowledge of all things related to a multi-piece wheel down to
            the aesthetics and technical aspects. Based in Rostov-on-Don, we
            have built direct relationships with today's leading manufacturers and
            decorative finishers. This allows us to provide our customers with the
            highest quality products and service.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="image-container">
            <img src="img/bg_main.jpg" className="img-fluid" alt="Home" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
