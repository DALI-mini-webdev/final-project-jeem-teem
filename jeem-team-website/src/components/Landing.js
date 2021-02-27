import React from 'react';
import "../jcustom.css";
import background from "../images/Rectangle 1.jpg";

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <img src={background} alt=""/>
            </div>
        )
    }
}
export default Landing;