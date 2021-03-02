import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../jcustom.css";
import "./form.css";
import emailjs from 'emailjs-com';

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
          senderName: '',
          senderEmail: '',
          message: '',
          recipientName: '',
          recipientEmail: '',
        }
    }
ß
    // user info funcs
    setSenderName = (event) => {
        this.setState({
            senderName: event.target.value,
        })
        console.log(this.state.senderName);
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

    /* fillTemplateParams = () => {
        this.setState({
            templateParams: {
                from_name: this.state.senderName,
                reply_to: this.state.senderEmail,
                to_name: this.state.recipientName,
                to_email: this.state.recipientEmail,
                message: this.state.message
            }
        })
        console.log(this.state.message);
    }

    submitFunc = () => {
        console.log("test1")
        this.fillTemplateParams
            .then(() => {
                console.log(this.state.message);
                console.log("test2");
                emailjs.send("default_service", "template_3vq0a3i", this.templateParams, "user_OiXuYPseFDKSxBoeYmpZp")
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                }, (error) => {
                    console.log(error.text);
                });
    } */

    sendEmail = (e) => {
        const { senderName,
        senderEmail,
        message,
        recipientName,
        recipientEmail} = this.state

        let templateParams = {
            from_name: senderName,
            reply_to: senderEmail,
            to_name: recipientName,
            to_email: recipientEmail,
            message: message
        };
        emailjs.send('jeem_contact', 'template_3vq0a3i', templateParams, 'user_OiXuYPseFDKSxBoeYmpZp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          this.resetForm()
      }

    resetForm = () => {
        this.setState({
            senderName:'',
            senderEmail:'',
            message:'',
            recipientName:'',
            recipientEmail:''
        })
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
                        <Form.Control onChange={this.setMessage} value={this.state.message} as="textarea" rows={3} placeholder="Write your message here. . ." />
                    </Form.Group>

                    <Button onClick={(e) => {e.preventDefault(); this.sendEmail()}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default Contact;