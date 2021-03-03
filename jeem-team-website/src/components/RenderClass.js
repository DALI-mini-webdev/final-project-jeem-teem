import React from 'react';
import { ToastBody } from 'react-bootstrap';
import '../pagescustom.css'

class RenderClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    var allClasses : [];

    componentDidMount(){
        if (this.props.match.params.classnumber){
              const classNumber = this.props.match.params.classnumber;

              firebase.db.collection('class-db').where(classNumber, '==', "courseNum").get()
               .... --> you get the picture save the info into the state
        }
     }
    }