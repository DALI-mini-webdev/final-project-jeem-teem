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
                <img className="BackgroundImage" src={background} alt=""/>
                <div className="LandingPage">
                    <title className="whiteText">Welcome</title>
                    <title className="subtitle">We have compiled this for future women in computer science.</title>
                    <button className="CTA">let's go!</button>
                </div>
            </div>
        )
    }
}
export default Landing;