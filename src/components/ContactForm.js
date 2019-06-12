import React from 'react';
import { Button, Form } from 'react-bootstrap';

function ContactForm() {
  return (
    <Form>
        <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
            type="email"
            placeholder="example@example.com"
            required
        />
        </Form.Group>
        <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Send
        </Button>
    </Form>
  );
}

export default ContactForm;