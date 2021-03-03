import React from 'react';
import { ToastBody } from 'react-bootstrap';
import '../pagescustom.css'
import Firebase from '../firebase/index';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/firestore';


// class AllClasses extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         allClasses: []
//     }
//   }
  
// componentDidMount(){
    
//     // const itemsRef = Firebase.db.collection('class-db');
//     // itemsRef.on('value', (snapshot) => {
//     //   let allClasses = snapshot.val();
//     //   this.setState({
//     //     allClasses: newState,
//     //   });
//     //   let newState = [];
//     //   for (let item in allClasses) {
//     //     newState.push({
//     //       id: item,
//     //       title: allClasses[item].tile,
//     //       number: allClasses[item].number
//     //     });
//     //   }
//     //   this.setState({
//     //     allClasses: newState
//     //   });
//     // });
//     // Firebase.ref('/allClasses').on('value', querySnapShot => {
//     //     let data = querySnapShot.val() ? querySnapShot.val() : {};
//     //     let todoItems = {...data};
//     //     this.setState({
//     //       todos: todoItems,
//     //     });
//     //   });
//       const classList = []

//       firebase.db.collection('class-db').get()
//       .then(querySnapshot => {
//         querySnapshot.docs.map(function(doc) {
//              this.setState({
//                 allClasses: [doc.data()]
//               })
//               classList.push(doc.data());
//             })
//           }).then(() => {
//             this.setState({
//               allClasses: classList
//             });
//             console.log(this.state.allClasses);
//           })
        
//           .catch(err => {
//             console.log(err.message)
//           })
          
    
//       console.log('Our data is fetched');
//       this.setState({
//         allClasses: 'Hello WallStreet'
    
//     })
//   }

//   render() {
//         return (
//             <div className="App">
//                 <title>All Classes</title>
//                 <body1>Here is a course list!</body1>
             
//                 <table class="course-table">
//                 <thead>
//                 <tr>
//                     <th>Course</th>
//                     <th>Distrib</th>
//                     <th>Time</th>
//                 </tr>
//                 </thead>
//                 <script>console.log("here!");</script>


//                 <tbody>
//                     {this.state.allClasses.map((item) => {
//                         return (
//                         <tr>
//                             <p>{item.title} {item.number}</p>
//                         <Link to = {`\class\${class.number}`}> {item.title} {item.number} );
//                         </Link>
//                         </tr>
//                         )
//                         })}
//                     <tr></tr>
//                 </tbody>
//                 </table> 
//           </div>
//           );
//         }

// }
// export default AllClasses;

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
                            <p class="course">COSC 2: Programming for Interactive Audio-Visual Arts</p>
                            <p class="des" >This course presents topics related to interactive visual art generated on a computer. Although it briefly covers computer-generated media art, the course focuses on the programming skills required for creating interactive works. Rather than using commercial software, students write their own programs, using the Processing language, to create interactive visuals and compositions. The course introduces fundamental concepts of how to represent and manipulate color, two-dimensional shapes, images, motion, and video. Coursework includes short programming assignments to practice the concepts introduced during lectures and projects to explore visual compositions. The course assumes no prior knowledge of programming. This course is not open to students who have passed COSC 1 or ENGS 20 or who have received credit for one of these courses via the Advanced Placement exam or the local placement exam.</p>
                            </td>
                        <td>TLA</td>
                        <td></td>
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
                            <p class="course">COSC 16: Introduction to Computational Neuroscience</p>
                            <p class="des">Your brain is composed of low-precision, slow, sparsely-connected computing elements, yet it outperforms any extant computer on tasks ranging from perception to planning. Computational Neuroscience has as its twin goals the scientific understanding of how brains compute thought, and the engineering capability to reconstruct the identified computations. Topics in the class included anatomical circuit design, physiological operating rules, evolutionary derivation, mathematical analyses, and emergent behavior, as well as development of applications from robotics to medicine.</p>
                            </td>
                        <td>SCI</td>
                        <td>
                        </td>
                        </tr>
                    <tr>
                        <td>
                            <p class="course">COSC 20: Motion Study: Using Motion Analysis for Science, Art and Medicine</p>
                            <p class="des">Motion Capture is the process of recording movement in physical space and transforming that information into a digital form that can be analyzed and adapted. Recent technological advances have increased the use of motion capture in movies, cartoon animation, and scientific applications. In this class, students will learn the foundations of this new field from basic anatomical principles of motion to how motions express a variety of human qualities (e.g., status, emotion). Students will work with a motion capture system to record and analyze their own movement to gain a hands-on understanding of how motion capture can enhance art and science.</p>                            
                            </td>
                        <td>TAS</td>
                        <td>
                        <p></p>
                        </td>
                        </tr>

                        <tr>
                        <td>
                            <p class="course">COSC 21 Foundations of Digital Design</p>
                            <p class="des">A survey of fundamental algorithms and algorithmic techniques, including divide-and-conquer algorithms, dynamic programming, randomized algorithms, greedy algorithms, and graph algorithms. Presentation, implementation and formal analysis, including space/time complexity and proofs of correctness, are all emphasized.</p>
                        </td>
                        <td>ART</td>
                        <td></td>
                   </tr>

                   <tr>
                        <td>
                            <p class="course">COSC 22: 3D Digital Modeling</p>
                            <p class="des">This projects-based lab course teaches the principles and practices of 3D modeling. Anyone with an interest in learning how models and environments in film, games, and VR applications are made, this course is for you.  We focus on modeling, shading, textures, lighting, and rendering, along with some dynamics, special effects, and animation. Students create environments and a fully rigged character model while learning their way around a state-of-the-art 3D animation program. Work will be evaluated on a set of technical and aesthetic criteria. Assignments are given weekly. Plan to meet every X-Hour. No prior experience, coding or drawing skills needed.COSC 22and COSC 24 can be taken in any order.</p>
                        </td>
                        <td>TLA</td>
                        <td></td>
                   </tr>

                        <tr>
                        <td>
                            <p class="course">COSC 30: Discrete Mathematics in Computer Science</p>
                            <p class="des">This course develops the mathematical foundations of computer science that are not calculus-based. It covers basic set theory, logic, mathematical proof techniques, and a selection of discrete mathematics topics such as  combinatorics (counting),  discrete probability, number theory,and graph theory. The mathematics is frequently motivated using computer science applications.</p>
                        </td>
                        <td>QDS</td>
                        <td></td>
                   </tr>

                   <tr>
                        <td>
                            <p class="course">COSC 31: Algorithms</p>
                            <p class="des">This projects-based course will familiarize students with the fundamentals of digital design, including layout, typography, composition, color theory, and process. Foundational concepts and the universal principles of design will be explored through extensive analyses and a series of design projects. No previous art or technical experience is required. Work is evaluated on a set of technical and aesthetic criteria and class participation. Plan to meet during every X-Hour.</p>
                        </td>
                        <td>TLA</td>
                        <td></td>
                   </tr>

                   <tr>
                        <td>
                            <p class="course">COSC 50: Software Design and Implementation</p>
                            <p class="des">Techniques for building large, reliable, maintainable, and understandable software systems. Topics include UNIX tools and filters, programming in C, software testing, debugging, and teamwork in software development. Concepts are reinforced through a small number of medium-scale programs and one team programming project.</p>
                        </td>
                        <td>TLA</td>
                        <td></td>
                   </tr>

                   <tr>
                        <td>
                            <p class="course">COSC031: Algorithms</p>
                            <p class="des"></p>
                        </td>
                        <td>TLA</td>
                        <td></td>
                   </tr>
                    </tbody>
                            </table>

            </div>
      
          </div>
          );
        }
}
export default AllClasses;