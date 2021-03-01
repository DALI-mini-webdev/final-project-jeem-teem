import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../jcustom.css";
import "./form.css";
import React from 'react';
import ClassFeedback from './ClassFeedback';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // what do i need as a state var here?
    }

    render() {
        return (
            <div className="form">
                <h2 className="title">Class Feedback Form</h2>
                {/* do we want some sort of user authentication 
                to ensure the user submitting the form is an actual dartmouth student -- like how layuplist does it?
                (probably can't check whether they've taken the class though) */}
                <h4 className="header">General Info</h4>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label className="body" >First Name: </Form.Label>
                        <Form.Control type="text" placeholder="Jane" />
                        
                        <Form.Label className="body" >Last Name: </Form.Label>
                        <Form.Control type="text" placeholder="Smith" />
                        <Form.Text className="text-muted">
                            Only your first name and last name initial will be displayed on the site.
                        </Form.Text>
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="body" >Full Dartmouth Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        {/* used for account login info? are we doing account for each user? */}
                    </Form.Group>

                    {/* <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group> 
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <ClassFeedback /> 

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default UserForm;
