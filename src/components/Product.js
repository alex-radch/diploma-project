import React, { Component, Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';

function Product(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.cost}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
