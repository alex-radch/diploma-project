import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';

function Contacts() {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h1>Contact Us</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={5}>
          <ContactInfo />
        </Col>
        <Col xs={12} lg={7}>
          <ContactForm />
        </Col>
      </Row>
    </>
  );
}

export default Contacts;
