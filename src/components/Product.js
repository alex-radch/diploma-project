import React from 'react';
import { Card } from 'react-bootstrap';

function Product({ item }) {
  return (
    <Card style={{ width: '18rem', marginBottom: '2rem' }}>
      <Card.Img variant="top" src={item.src} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>Price {item.cost}$</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
