import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../jcustom.css";
import "./form.css";
import { user_OiXuYPseFDKSxBoeYmpZp } from 'emailjs-com';

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          senderName: '',
          senderEmail: '',
          message: '',
          recipientName: '',
          recipientEmail: '',
          
        //   templateParams = {
        //     from_name: '',
        //     reply_to: '',
        //     to_name: '',
        //     to_email: '',
        //     message: ''
        //   }
        }
    }

    // user info funcs
    setSenderName = (event) => {
        this.setState({
            senderName: event.target.value,
        })
    }

    setSenderEmail = (event) => {
        this.setState({
            senderEmail: event.target.value
        })
    }

    setRecipientName = (event) => {
        this.setState({
            recipientName: event.target.value
        })
    }

    setRecipientEmail = (event) => {
        this.setState({
            recipientEmail: event.target.value
        })
    }

    setMessage = (event) => {
        this.setState({
            message: event.target.value
        })

    }
    

    handleClick = () => {
        return(
            <div>
                {this.saveNewMessage}
                <p>Thanks! I'll get back to you soon.</p>
            </div>
        )
    }
    
    fillTemplateParams = () => {
        this.setState({
            templateParams: {
                from_name: this.senderName,
                reply_to: this.senderEmail,
                to_name: this.recipientName,
                to_email: this.recipientEmail,
                message: this.message
            }
        })
    }

    sendEmail = () => {
        emailjs.send(default_service, template_3vq0a3i, this.templateParams, user_OiXuYPseFDKSxBoeYmpZp)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    submitFunc = () => {
        this.fillTemplateParams;
        this.sendEmail;
    }

    render() {
        return (
            <div className="form">
                <h2 className="title">Send a message!</h2>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label className="body">Your Name: </Form.Label>
                        <Form.Control onChange={this.setSenderName} value={this.state.senderName} type="text" placeholder="Jane Doe" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="body">Full Dartmouth Email address</Form.Label>
                        <Form.Control value={this.state.senderEmail} onChange={this.setSenderEmail} type="email" placeholder="first.m.last.20@dartmouth.edu" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label className="body">Recipient Name: </Form.Label>
                        <Form.Control onChange={this.setRecipientName} value={this.state.recipientName} type="text" placeholder="Jane Doe" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="body">Recipient Email address</Form.Label>
                        <Form.Control value={this.state.recipientEmail} onChange={this.setRecipientEmail} type="email" placeholder="first.m.last.20@dartmouth.edu" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="body">Message</Form.Label>
                        <Form.Control onChange={this.setMessage} as="textarea" rows={3} />
                    </Form.Group>

                    <Button onClick={this.submitFunc} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default Contact;