import React from 'react';

class BestRated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <div className="App">
                <title>Best Rated</title>
                <body1>All-time favorites!</body1>
             
                <table class="course-table">
                <thead>
                <tr>
                    <th>Course</th>
                    <th>Distrib</th>
                    <th>Time</th>
                </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>
                            <p class="course">COSC1: Introduction to Programming and Computation</p>
                            <p class="des">This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. No prior programming experience is assumed.</p>
                            </td>
                        <td>TLA</td>
                        <td>21W: E, D</td>
                        </tr>
                    <tr>
                        <td>
                            <p class="course">COSC 10: Problem Solving via Object-Oriented Programming</p>
                            <p class="des">Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.</p>
                            </td>
                        <td>TLA</td>
                        <td>21W: C</td>
                    </tr>
                   
                    <tr>
                        <td>
                            <p class="course">COSC030: Discrete Mathematics in Computer Science</p>
                            <p class="des">This course develops the mathematical foundations of computer science that are not calculus-based. It covers basic set theory, logic, mathematical proof techniques, and a selection of discrete mathematics topics such as  combinatorics (counting),  discrete probability, number theory,and graph theory. The mathematics is frequently motivated using computer science applications.</p>
                        </td>
                        <td>QDS</td>
                        <td></td>
                   </tr>

                   <tr>
                        <td>
                            <p class="course">COSC031: Algorithms</p>
                            <p class="des">A survey of fundamental algorithms and algorithmic techniques, including divide-and-conquer algorithms, dynamic programming, randomized algorithms, greedy algorithms, and graph algorithms. Presentation, implementation and formal analysis, including space/time complexity and proofs of correctness, are all emphasized.</p>
                        </td>
                        <td>QDS</td>
                        <td></td>
                   </tr>

                   <tr>
                        <td>
                            <p class="course">COSC050: Software Design and Implementation</p>
                            <p class="des">Techniques for building large, reliable, maintainable, and understandable software systems. Topics include UNIX tools and filters, programming in C, software testing, debugging, and teamwork in software development. Concepts are reinforced through a small number of medium-scale programs and one team programming project.</p>
                        </td>
                        <td>TLA</td>
                        <td></td>
                   </tr>

                   <tr>
                        <td>
                            <p class="course">COSC022: 3D Digital Modeling</p>
                            <p class="des">This projects-based lab course teaches the principles and practices of 3D modeling. Anyone with an interest in learning how models and environments in film, games, and VR applications are made, this course is for you.  We focus on modeling, shading, textures, lighting, and rendering, along with some dynamics, special effects, and animation. Students create environments and a fully rigged character model while learning their way around a state-of-the-art 3D animation program. Work will be evaluated on a set of technical and aesthetic criteria. Assignments are given weekly. Plan to meet every X-Hour. No prior experience, coding or drawing skills needed.COSC 22and COSC 24 can be taken in any order.</p>
                        </td>
                        <td>TLA</td>
                        <td></td>
                   </tr>

                   {/* <tr>
                        <td>
                            <p class="course">COSC031: Algorithms</p>
                            <p class="des"></p>
                        </td>
                        <td>TLA</td>
                        <td></td>
                   </tr> */}
                   


                    </tbody>
                            </table>

            </div>
      
          </div>
          );
        }
    }
    export default BestRated;