import { Jumbotron} from 'react-bootstrap';
import '../jcustom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import background from "../images/Rectangle 1.jpg";


class Home extends React.Component {
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
                    <a href="http://localhost:3000/all-classes">
                        <button class="btn btn-default btn-lg CTA">let's go!</button>
                        </a>
                    <br></br>
                   
                </div>

            <div>
                <Jumbotron>
                    {/* <h1>Welcome to Jeem Teem's Course Database for Dartmouth Women in STEM!</h1>
                    <h5>This was built as our project for our dali-wisp final project.</h5>
                    <button>learn more</button>
                    <p>
                        this is a React Bootstrap Jumbotron
                    </p> */}
                    <br></br>

                    <ul class="flex-container">
                    <li class="flex-item">
                        <p><span class="bold">Liz Frey</span></p>
                    </li>
                    <li class="flex-item">
                        <p><span class="bold">Ella Gates</span></p>
                        <p></p>
                    </li>
                    <li class="flex-item">
                        <p><span class="bold">Judy Guo</span></p>
                        <p>I'm a '24!</p>
                        {/* <p>A ’24 at Dartmouth College, undecided but exploring economics, anthropology, and human-centered design.
                        </p> */}
                        <a href="http://github.com/judy-guo">
                        <button>GitHub</button>
                        </a>
                        <a href="http://instagram.com/j.j.guo">
                        <button>IG</button>
                        </a>
                    </li>
                    <li class="flex-item">
                        <p><span class="bold">Megan Liu</span></p>
                    </li>
                </ul>
                </Jumbotron>
                

            </div>
            </div>
        );
    }
}

export default Home;
