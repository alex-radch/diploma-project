import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        message: '',
        showMessage: false
    }

    submitHandler = e => {
        e.preventDefault();
        this.setState({
            message: '',
            showMessage: true
        }, () => {
            setTimeout(() => {
                if (this.state.showMessage) {
                    this.closeHandler();
                }
            }, 3000)
        });
    }

    changeHandler = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    closeHandler = e => {
        this.setState({
            showMessage: false
        });
    }

    render() {
        return (
            <>
                { this.state.showMessage && 
                    <div className="alert alert-success" role="alert">
                        Message has been successfuly sent!
                        <button type="button" className="close" aria-label="Close" onClick={this.closeHandler}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                }
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.changeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={this.state.email}
                            placeholder="example@example.com"
                            onChange={this.changeHandler}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Message</Form.Label>
                        <Form.Control 
                            as="textarea"
                            name="message"
                            value={this.state.message}
                            onChange={this.changeHandler}
                            required/>
                    </Form.Group>
                    <Button disabled={this.state.showMessage} variant="primary" type="submit">Send</Button>
                </Form>
            </>
        );
    }
}

export default ContactForm;