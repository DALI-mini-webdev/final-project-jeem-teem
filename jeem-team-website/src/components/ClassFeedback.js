import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class ClassFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 0, 
        };
        // any other state vars here?
    }

    render() {
        return (
            <div>
                <h4>Class Info</h4>

                {/* drop down select for class */}
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                    <Form.Control as="select">
                        <option>COSC 1 Introduction to Programming and Computation</option>
                        <option>COSC 2 Programming for Interactive Audio-Visual Arts</option>
                        <option>COSC 10 Problem Solving via Object-Oriented Programming</option>
                        <option>COSC 16 Introduction to Computational Neuroscience</option>
                        <option>COSC 20 Motion Study: Using Motion Analysis for Science, Art and Medicine</option>
                        {/* should we not do course numbering from 1-100 in an array
                         since there are some nums that are skipped and since there are class # with decimals 
                         so maybe dictionary?*/}
                    </Form.Control>
                </Form.Group>

                {/* prof */}
                <Form.Group controlId="formProf">
                    <Form.Label>Professor: </Form.Label>
                    <Form.Control type="text" placeholder="Tom" />

                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" placeholder="Cormen" />
                </Form.Group>

                {/* review */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Course Review</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                {/* want to be contacted by underclassmen? (Y/N) */}
                <Form.Group>
                    <Form.Label>Do you want to be contacted with questions regarding your review and class experience?</Form.Label>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="yes" type={type} id={`inline-${type}-yes`} />
                            <Form.Check inline label="no" type={type} id={`inline-${type}-no`} />
                        </div>
                    ))}
                </Form.Group>
                {/* recommend? (thumbs up/down) */}
                {/* need to pull data from layup list about ratings of courses -- backend   */}

                {/* button for deleting this review*/}
                <Button variant="danger">delete this class review</Button>
                
                {/* button for adding another class review*/}
                <Button variant="success">add another class review</Button>
            </div>
        );
    }
}

export default ClassFeedback;
