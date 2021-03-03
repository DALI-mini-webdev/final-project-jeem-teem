import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../jcustom.css";
import "./form.css";
import React from 'react';
import Firebase from '../firebase/index';
import dartcsclasses from '../csclasses';

class UserClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // specfic user info
            userFname: '',
            userLname: '',
            userEmail: '',
            contacted: false,

            // user-specific info assoc with this course
            userList: [],
            userEmailList: [],
            userContactList: [],
            courseProfFname: '',
            courseProfLname: '',
            courseReview: '', // action item--use body
            myRef: React.createRef(), // for form select input

            // course info
            courseName: '',
            courseNum: 0, // used as document identifier in firebase
            id: 0,
            // courseRating: 0,
        };
    }

    // user info funcs
    setFirstName = (event) => {
        this.setState({
            userFname: event.target.value,
        })
    }

    setLastName = (event) => {
        this.setState({
            userLname: event.target.value,
        })
    }

    setEmail = (event) => {
        this.setState({
            userEmail: event.target.value
            // ANY DARTMOUTH API TO VERIFY IT'S AN ACTUAL D EMAIL? regex? 
        })
    }

    // prof info funcs
    setProfFName = (event) => {
        this.setState({
            courseProfFname: event.target.value,
        })
    }

    setProfLName = (event) => {
        this.setState({
            courseProfLname: event.target.value,
        })
    }

    // course info funcs
    writeCourseReview = (event) => {
        this.setState({
            courseReview: event.target.value
        })

    }

    contactConsentFunc = (event) => {
        if (event.target.value === "yes") {
            this.setState({
                contacted: true,
            })
        }
        else if (event.target.value === "no") {
            this.setState({
                contacted: false,
            })
        }
    }

    // updateRating = (event) => {  // ON BACKBURNER
    //     firebase.db.collection('class-db').where(this.state.courseNum, '==', "courseNum").get()
    //         .then((querySnapshot) => {
    // console.log(querySnapshot)
    // const courseRating = querySnapshot.docs[0].ref
    // this.courseRating = firebase.db.courseNum.rating


    // if (event.target.value.lower === "yes") {
    //     this.state.courseRating += 1
    // }
    // else if (event.target.value.lower === "no") {
    //     this.state.courseRating -= 1
    // }

    // .then(() => {  // PUT? update courseRating field in the document 
    //    firebase.db.courseNum.courseRating: this.courseRating
    // }) 
    //         })
    // }

    submitFunc = () => {
        // PUT user list -- look @ link emma sent
        // currently GET + POSTing to db, want PUT    
        const tempUserList = [];
        const tempEmailList = [];
        const tempContactConsentList = [];
        const tempProfList = [];
        const tempReviewList = [];

        // var docId = '';
        // docId = Firebase.firestore().collection('class-db').where("courseNum", "==", dartcsclasses[this.state.myRef.current.value]).id
        // console.log(docId)

        Firebase.firestore().collection('class-db').where("courseNum", "==", dartcsclasses[this.state.myRef.current.value]).get()
            .then((prevClassDoc) => {
                // update 
                this.setState({
                    tempUserList: prevClassDoc.userList,
                    tempEmailList: prevClassDoc.emailList,
                    tempContactConsentList: prevClassDoc.userContactList,
                })
                tempUserList.push(`${this.state.userFname} ${this.state.userLname}`)
                tempEmailList.push(`${this.state.userEmail}`)
                tempContactConsentList.push(this.state.contacted)
                tempProfList.push(`${this.state.courseProfFname} ${this.state.courseProfLname}`)
                tempReviewList.push(`${this.state.courseReview}`)

                // testing
                // console.log(prevClassDoc) // BUG --- no data even tho doc alr exists? [high priority]
                // console.log(tempUserList)
                // console.log(prevClassDoc.exists, "exist") // BUG --- undefined, method doesn't work?  

                // add or update info to db, dependent upon if class alr existing in db 
                if (prevClassDoc.exists) { // BUG --- DOESN'T WORK (use else in this if-else statement); if doc alr exists, just need to update
                    console.log("UNEXPECTED doc exists")
                    Firebase.firestore().collection('class-db').update({
                        courseProfName: this.state.courseProfName,
                        courseReview: this.state.courseReview,
                        userList: tempUserList,
                        // courseRating: this.state.courseRating, 
                        emailList: tempEmailList,
                        userContactList: tempContactConsentList,
                    })

                        .then(() => {
                            this.setState({
                                // specfic user info
                                userFname: '',
                                userLname: '',
                                userEmail: '',
                                contacted: false,

                                // user-specific info assoc with this course
                                userList: [],
                                userEmailList: [],
                                userContactList: [],
                                courseProfFname: '',
                                courseProfLname: '',
                                courseReview: '', // action item--use body
                                myRef: React.createRef(), // for form select input

                                // course info
                                courseName: '',
                                courseNum: 0, // used as document identifier in firebase
                                id: 0,
                                // courseRating: 0, 
                            })
                        }).catch((e) => {
                            console.log("error")
                            console.log(e);
                        })


                }
                else { // doesn't alr exist in firebase -- add new doc
                    console.log("EXPECTED doc DNE")
                    Firebase.firestore().collection('class-db').add({
                        // id: this.state.id,
                        courseName: this.state.myRef.current.value,
                        courseNum: dartcsclasses[this.state.myRef.current.value],
                        // courseProfName: this.state.courseProfFname + " " + this.state.courseProfLname,
                        // courseReview: this.state.courseReview,
                        courseProfList: tempProfList,
                        courseReviewList: tempReviewList,
                        userList: tempUserList,
                        // courseRating: this.state.courseRating, 
                        emailList: tempEmailList,
                        userContactList: tempContactConsentList,
                    })
                        .then(() => {

                            this.setState({
                                // specfic user info
                                userFname: '',
                                userLname: '',
                                userEmail: '',
                                contacted: false,

                                // user-specific info assoc with this course
                                userList: [],
                                userEmailList: [],
                                userContactList: [],
                                courseProfFname: '',
                                courseProfLname: '',
                                courseReview: '', // action item--use body
                                myRef: React.createRef(), // for form select input

                                // course info
                                courseName: '',
                                courseNum: 0, // used as document identifier in firebase
                                id: 0,
                                // courseRating: 0,
                            })
                        }).catch((e) => {
                            console.log("error")
                            console.log(e);
                        })
                }
            }).catch((e) => {
                console.log("error")
                console.log(e);
            })
    }



    render() {
        return (
            <div>
                <div className="form">
                    <h2 className="title">Class Feedback Form</h2>

                    {/* user info */}
                    <h4 className="header">Your Info</h4>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label className="body">First Name: </Form.Label>
                            <Form.Control onChange={this.setFirstName} value={this.state.userFname} type="text" placeholder="Emma" />

                            <Form.Label className="body">Last Name: </Form.Label>
                            <Form.Control onChange={this.setLastName} value={this.state.userLname} type="text" placeholder="Rafkin" />

                            <Form.Text className="text-muted">
                                Only your first name and last name initial will be displayed on the site.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="body">Full Dartmouth Email address</Form.Label>
                            <Form.Control value={this.state.userEmail} onChange={this.setEmail} type="email" placeholder="first.m.last.20@dartmouth.edu" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else without your consent.
                            </Form.Text>
                        </Form.Group>


                        {/* class info */}
                        <h4>Course Info</h4>

                        {/* drop down select for class */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="body">Course Name</Form.Label>
                            <Form.Control as="select" ref={this.state.myRef}>
                                {/* dart cs classes */}
                                {Object.keys(dartcsclasses).map((course) => {
                                    return (
                                        <option key={course}>{course}</option>
                                    )
                                }
                                )}
                            </Form.Control>
                        </Form.Group>

                        {/* prof */}
                        <Form.Group controlId="formProf">
                            <Form.Label className="body">Professor's First Name: </Form.Label>
                            <Form.Control onChange={this.setProfFName} type="text" placeholder="Tom" />

                            <Form.Label className="body">Professor's Last Name: </Form.Label>
                            <Form.Control onChange={this.setProfLName} type="text" placeholder="Cormen" />
                        </Form.Group>

                        {/* course review */}
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="body">Course Review</Form.Label>
                            <Form.Control onChange={this.writeCourseReview} as="textarea" rows={3} />
                        </Form.Group>

                        {/* recommend? (+/-/0) */}
                        {/* action item--make the following options either/or*/}
                        {/* <Form.Label>Do you recommend this course?</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check onClick={this.updateRating} inline name="rating" value="yes" label="Yes" type={type} id={`inline-${type}-yes`} />
                                <Form.Check onClick={this.updateRating} inline name="rating" value="no" label="No" type={type} id={`inline-${type}-no`} />
                                <Form.Check inline label="Neutral" type={type} id={`inline-${type}-neutral`} />
                            </div>
                        ))} */}


                        {/* consent to contact (Y/N) */}
                        <Form.Label>Do you want to be contacted with questions regarding your review and class experience? (If yes, we will display your email address.)</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check onClick={this.contactConsentFunc} name="rating" label="Yes" value="yes" type={type} inline id={`inline-${type}-yes`} />
                                <Form.Check onClick={this.contactConsentFunc} name="rating" label="No" value="no" type={type} inline id={`inline-${type}-no`} />
                            </div>
                        ))}

                        {/* button for deleting this review*/}
                        {/* <Button variant="danger">delete this class review</Button> */}

                        {/* button for adding another class review*/}
                        {/* <Button variant="success">add another class review</Button> */}


                        <Button onClick={this.submitFunc} variant="primary" >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default UserClassForm;