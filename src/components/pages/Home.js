import React  from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Dropdown } from 'react-bootstrap';
import Products from './Products';

function Home() {
  return (
    <Row className="about-us">
      <Col xs={12}>
        <Image src="img/bg_main.jpg" className="w-100" fluid />
        <h1 className="text-center text-xl-left">
          Welcome to Protected Reaches
        </h1>
        <Dropdown.Divider />
        <div className="shopfor">
          <h2>SHOP FOR</h2>
          <Link to="/products">More Products ></Link>
        </div>
        <Products />
        <Dropdown.Divider />
        Established in 2010, WheelFlip has been at the forefront of wheel
        customization. Beginning as an online wheel specific marketplace, and
        then transitioning into a shop offering refinishing and resizing
        services, we are now dedicated to offering the highest quality
        aftermarket wheel parts at a wholesale and retail level. We have
        extensive knowledge of all things related to a multi-piece wheel down to
        the aesthetics and technical aspects. Based in Southern California, we
        have built direct relationships with today's leading manufacturers and
        decorative finishers. This allows us to provide our customers with the
        highest quality products, service, and at prices that oftentimes cannot
        be matched.
      </Col>
    </Row>
  );
}

export default Home;
