import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

function About() {
  return (
    <Row className="about-us">
      <Col xs={12} lg={4}>
        <h1>О нас</h1>
        Появились вопросы по дискам? Напишите нам подробное сообщение,
        объясняющее, какую работу вы хотели бы заказать. Мы будем рады работать
        с вами!
        <br />
        <br />
        <h2>
          <strong>Связаться с нами</strong>
        </h2>
        <br />
        Часы работы магазина: <br /> с 10:00 до 18:00 по Московскому времени
        <br />
        По телефону: 89183578831
      </Col>
      <Col xs={12} lg={8}>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Ваше Имя</Form.Label>
            <Form.Control type="text" placeholder="Alexandr" required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Ваша Почта</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Ваш Комментарий</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Отправить
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default About;
