import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

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
            </div>
        );
    }
}

export default Classes;
