import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../pagescustom.css'

class Classes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          sort: props.sort,
        };
      }
    render(){
        return(
            <div>
                <h1>{this.state.sort}</h1>
                <p>This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems... (see more)</p>
            </div>
        );
    }
}

export default Classes;
