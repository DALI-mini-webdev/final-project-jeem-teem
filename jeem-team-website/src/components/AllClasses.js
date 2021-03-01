import React from 'react';
import { ToastBody } from 'react-bootstrap';
import '../pagescustom.css'

class AllClasses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <div className="App">
                <title>All Classes</title>
                <body1>Here is a course list!</body1>
             
                <table class="course-table">
                <thead>
                <tr>
                    <th>Score</th>
                    <th>Course</th>
                    <th>Distrib</th>
                    <th>Time</th>
                </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>528</td>
                        <td>
                            <p class="course">COSC1: Introduction to Programming and Computation</p>
                            <p class="des">This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. No prior programming experience is assumed.</p>
                            </td>
                        <td>TLA</td>
                        <td>21W: E, D</td>
                        </tr>
                    <tr>
                        <td></td>
                        <td>
                            <p class="course">COSC 2: Programming for Interactive Audio-Visual Arts</p>
                            <p class="des" >This course presents topics related to interactive visual art generated on a computer. Although it briefly covers computer-generated media art, the course focuses on the programming skills required for creating interactive works. Rather than using commercial software, students write their own programs, using the Processing language, to create interactive visuals and compositions. The course introduces fundamental concepts of how to represent and manipulate color, two-dimensional shapes, images, motion, and video. Coursework includes short programming assignments to practice the concepts introduced during lectures and projects to explore visual compositions. The course assumes no prior knowledge of programming. This course is not open to students who have passed COSC 1 or ENGS 20 or who have received credit for one of these courses via the Advanced Placement exam or the local placement exam.</p>
                            </td>
                        <td>TLA</td>
                        <td></td>
                        </tr>
                    <tr>
                        <td>116</td>
                        <td>
                            <p class="course">COSC 10: Problem Solving via Object-Oriented Programming</p>
                            <p class="des">Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.</p>
                            </td>
                        <td>TLA</td>
                        <td>21W: C</td>
                        </tr>
                    <tr>
                        <td></td>
                        <td>
                            <p class="course">COSC 16: Introduction to Computational Neuroscience</p>
                            <p class="des">Your brain is composed of low-precision, slow, sparsely-connected computing elements, yet it outperforms any extant computer on tasks ranging from perception to planning. Computational Neuroscience has as its twin goals the scientific understanding of how brains compute thought, and the engineering capability to reconstruct the identified computations. Topics in the class included anatomical circuit design, physiological operating rules, evolutionary derivation, mathematical analyses, and emergent behavior, as well as development of applications from robotics to medicine.</p>
                            </td>
                        <td>SCI</td>
                        <td>
                        </td>
                        </tr>
                    <tr>
                        <td></td>
                        <td>
                            <p class="course">COSC 20: Motion Study: Using Motion Analysis for Science, Art and Medicine</p>
                            <p class="des">Motion Capture is the process of recording movement in physical space and transforming that information into a digital form that can be analyzed and adapted. Recent technological advances have increased the use of motion capture in movies, cartoon animation, and scientific applications. In this class, students will learn the foundations of this new field from basic anatomical principles of motion to how motions express a variety of human qualities (e.g., status, emotion). Students will work with a motion capture system to record and analyze their own movement to gain a hands-on understanding of how motion capture can enhance art and science.</p>                            
                            </td>
                        <td>TAS</td>
                        <td>
                        <p></p>
                        </td>
                        </tr>
                    </tbody>
                            </table>

            </div>
      
          </div>
          );
        }
}
export default AllClasses;