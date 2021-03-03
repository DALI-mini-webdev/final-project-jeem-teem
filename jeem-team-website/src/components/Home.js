import { Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../jcustom.css'
import React from 'react';
import background from "../images/Rectangle 1.jpg";
import {ChevronDownIcon} from '@primer/octicons-react'



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="Home">
                <img className="BackgroundImage" src={background} alt=""/>
                <div className="LandingPage">
                    <title className="whiteText">Welcome</title>
                    <title className="subtitle">We have compiled this for future women in computer science.</title>
                    <a href="http://localhost:3000/all-classes">
                        <button className="btn btn-default btn-lg CTA">let's go!</button>
                        </a>
                    <title className="scrollIcon"><ChevronDownIcon size={36} /></title>                   
                </div>

            <div>
            <div className="HomeHeader">

                    <div>
                    <title>We are JEEM.</title>
                    </div>
                    <p>  We hope to connect and inspire women in computer science. This site serves as a homebase for our community and a catalog of Dartmouth CS classes.</p>
                    <a href="https://www.instagram.com/dartmouthwics">
                    <button>Check out WiCS happenings!</button>
                    </a>
                    <p><br></br></p>
                 
                    <p>  This was built as our project for our dali-wisp final project. Check out our bios below, and have fun exploring our site!</p>
                    <a href="https://students.dartmouth.edu/wisp/">
                    <button>Check out WiSP!</button>
                    </a>
                    <p><br></br></p>

                    </div>

            <ul class="flex-container">
                <li class="flex-item">
                    <p><br></br></p>
                    <p><span class="bold">Judy Guo</span></p>
                    <p>Judy Guo is a ’24 at Dartmouth College, very undecided but exploring economics, anthropology, and human-centered design.
                    </p>
                    <a href="http://github.com/judy-guo">
                    <button>GitHub</button>
                    </a>
                    <a href="http://instagram.com/j.j.guo">
                    <button>IG</button>
                    </a>
                </li>
                <li class="flex-item">
                    <p><br></br></p>
                    <p><span class="bold">Elizabeth Frey</span></p>
                    <a href="https://github.com/lizfrey">
                    <button>GitHub</button>
                    </a>
                    <a href="http://instagram.com/lizwfrey">
                    <button>IG</button>
                    </a>
                    <a href="http://instagram.com/j.j.guo">
                    <button>IG</button>
                    </a>
                </li>

                <li class="flex-item">
                    <p><br></br></p>
                    <p><span class="bold">Ella Gates</span></p>
                    <p>Ella Gates is a '24 at Dartmouth College studying computer science and linguistics.</p>
                    <a href="https://github.com/ellajanegates">
                    <button>GitHub</button>
                    </a>
                    <a href="http://instagram.com/ellajanegates">
                    <button>IG</button>
                    </a>
                </li>

                <li class="flex-item">
                    <p><br></br></p>
                    <p><span class="bold">Megan Liu</span></p>
                    <p>Megan Liu is a '24 at Dartmouth studying computer science and neuroscience.  
                    </p>
                    <a href="https://github.com/mliu31">
                    <button>GitHub</button>
                    </a>
                    <a href="http://instagram.com/megasaurus31">
                    <button>IG</button>
                    </a>
                    <p><br></br></p>
                    <p><br></br></p>

                </li>
            </ul>
                

            </div>
            </div>
        );
    }
}

export default Home;
