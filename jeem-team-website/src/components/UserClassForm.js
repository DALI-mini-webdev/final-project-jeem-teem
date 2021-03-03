import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../jcustom.css";
import "./form.css";
import React from 'react';
import firebase from '../firebase/index';
import dartcsclasses from '../csclasses';

class UserClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // specfic user info
            userFname: '',
            userLname: '',
            userName: this.fname + " " + this.lname,
            userEmail: '',
            // userId: 0,
            contacted: false,

            // user info assoc with this course
            userList: [],
            userEmailList: [],
            userContactList: [],

            // course info
            courseName: '',
            courseNum: 0, // used as document class name in firebase
            courseProfFname: '',
            courseProfLname: '',
            courseProfName: this.courseProfFname + " " + this.courseProfLname,
            courseReview: '', // action item--use body
            courseRating: 0,
            myRef: React.createRef(), // for form select 
            id: 0,
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
            userLname: event.target.value
        })
    }

    setEmail = (event) => {
        this.setState({
            userEmail: event.target.value
            // ANY DARTMOUTH API TO VERIFY IT'S AN ACTUAL D EMAIL? 
        })
    }

    // prof info funcs
    setProfFName = (event) => {
        this.setState({
            courseProfFName: event.target.value
        })
    }

    setProfLName = (event) => {
        this.setState({
            courseProfLName: event.target.value
        })
    }

    // course info funcs
    writeCourseReview = (event) => {
        this.setState({
            courseReview: event.target.value
        })

    }

    // updateRating = (event) => {  // IN PROGRESS
    //     firebase.db.collection('class-db').where(this.state.courseNum, '==', "courseNum").get()
    //         .then((querySnapshot) => {
    // console.log(querySnapshot)
    // const courseRating = querySnapshot.docs[0].ref
    // DOES "WHERE" HAVE TO COMPARE IDs? CAN DO COURSENUM INSTEAD? 
    // this.courseRating = firebase.db.courseNum.rating


    // if (event.target.value.lower === "yes") {
    //     this.state.courseRating += 1
    // }
    // else if (event.target.value.lower === "no") {
    //     this.state.courseRating -= 1
    // }

    // .then(() => {  // PUT?? update courseRating field in the document 
    //    firebase.db.courseNum.courseRating: this.courseRating
    // }) 
    //         })
    // }


    // submitFunc = () => {
    //     // course info state vars
    //     console.log("selected course (ref)", this.state.myRef.current.value)
    //     console.log("pre-setState courseNum", this.state.courseNum)
    //     this.setState({
    //         courseName: this.state.myRef.current.value,
    //         courseNum: dartcsclasses[this.state.myRef.current.value]
    //     })


    //     // PUT user list -- look @ link emma sent
    //     // currently POSTing to db, want PUT
    //     const tempUserList = []
    //     const tempUserEmailList = []
    //     const tempUserContactList = []
    //     firebase.db.collection('class-db').where(this.state.courseNum, '==', "courseNum").get()
    //         .then(query => {
    //             query.forEach(doc => {
    //                 //user list
    //                 console.log(doc.userList.data());
    //                 tempUserList.push(doc.userList.data());
    //                 // console.log(tempUserList)

    //                 // email list 
    //                 console.log(doc.userList.data());
    //                 tempUserEmailList.push(doc.userEmailList.data());
    //                 // console.log(tempUserEmailList)

    //                 // contact  list 
    //                 console.log(doc.userList.data());
    //                 tempUserContactList.push(doc.userContactList.data());
    //                 // console.log(tempUserContactList)

    //             })
    //         }).then(() => {
    //             this.setState({
    //                 userList: tempUserList
    //             })

    //             // push to firebase
    //             console.log(this.state.userFname)
    //             console.log(this.state.userLname)
    //             console.log(this.state.userEmail)
    //             console.log(this.state.courseProfFName)
    //             console.log(this.state.courseProfLName)
    //             console.log(this.state.courseReview)
    //             // console.log(this.state.courseName)
    //             // console.log(this.state.courseNum)

    //             firebase.db.collection('class-db').add({
    //                 courseName: this.state.myRef.current.value,
    //                 courseNum: dartcsclasses[this.state.myRef.current.value],
    //                 courseProfName: this.state.courseProfName,
    //                 courseReview: this.state.courseReview,
    //                 userList: this.state.userList,
    //                 // courseRating: this.state.courseRating, 
    //                 // emailList: this.state.userEmailList,
    //                 // userContactList: this.state.userContactList, 
    //             }).then(ref => {
    //                 console.log('document reference id', ref.id)
    //                 this.setState({
    //                     id: this.state.id + 1
    //                 })
    //             }) //.catch((e) => {
    //             //     console.log(e);
    //             // })


    //         }).catch((e) => {
    //             console.log("error")
    //             console.log(e);
    //         })


    // }
    submitFunc = () => {
        // PUT user list -- look @ link emma sent
        // currently POSTing to db, want PUT
        const tempUserList = []
        firebase.db.collection('class-db').get()
            .then(query => {
                query.forEach(doc => {
                    console.log(doc.data());
                    tempUserList.push(doc.data());
                    console.log(tempUserList)
                })
            }).then(() => {
                this.setState({
                    userList: tempUserList 
                })
            }).catch((e) => {
                console.log("error")
                console.log(e);
            })
        // PUT email list (same logic as above)
        // PUT consent to contact list (same logic as above)
        // course selection
        console.log("selected course (ref)", this.state.myRef.current.value)
        console.log("pre-setState courseNum", this.state.courseNum)
        this.setState({ 
            courseName: this.state.myRef.current.value, 
            courseNum: dartcsclasses[this.state.myRef.current.value]
        })
        // push to firebase
        console.log(this.state.userFname) 
        console.log(this.state.userLname)
        console.log(this.state.userEmail)
        console.log(this.state.courseProfFName)
        console.log(this.state.courseProfLName)
        console.log(this.state.courseReview)
        // console.log("post-setState courseName", this.state.courseName)
        // console.log("post-setState courseNum", this.state.courseNum)
        firebase.db.collection('class-db').add({ 
            courseName: this.state.courseName,
            courseNum: this.state.courseNum,
            courseProfName: this.state.courseProfName,
            // courseRating: this.state.courseRating, 
            courseReview: this.state.courseReview,
            // emailList: this.state.userEmailList,
            // userContactList: this.state.userContactList, 
            // userList: this.state.userList,
        }).then(ref => { 
            console.log('document reference id', ref.id)
            this.setState ({ 
                id: this.state.id + 1
            }) 
        }).catch((e) => { 
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
                        <h4 className="header">Course Info</h4>

                        {/* drop down select for class */}
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label className="body">Course Name</Form.Label>
                            <Form.Control as="select" ref={this.state.myRef}>
                                {/* dart cs classes */}
                                {Object.keys(dartcsclasses).map((course) => {
                                    return (
                                        <option>{course}</option>
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
                        {/* <Form.Label>Do you want to be contacted with questions regarding your review and class experience? (if yes, we will display your email address)</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Yes" type={type} id={`inline-${type}-yes`} />
                                <Form.Check inline label="No" type={type} id={`inline-${type}-no`} />
                            </div>
                        ))} */}

                        {/* button for deleting this review*/}
                        {/* <Button variant="danger">delete this class review</Button> */}

                        {/* button for adding another class review*/}
                        {/* <Button variant="success">add another class review</Button> */}


                        <Button onClick={this.submitFunc} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default UserClassForm;