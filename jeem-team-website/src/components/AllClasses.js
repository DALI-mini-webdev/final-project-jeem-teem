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
                <body1>this is a comprehensive course catalog for you!</body1>
                <body1>This course introduces computational concepts that are fundamental to computer science and are useful for the sciences, social sciences, engineering, and digital arts. Students will write their own interactive programs to analyze data, process text, draw graphics, manipulate images, and simulate physical systems... (see more)</body1>
             
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
                        <td>COSC1</td>
                        <td>TLA</td>
                        <td></td>
                        </tr>
                    <tr>
                        <td>116</td>
                        <td>COCS10</td>
                        <td>TLA</td>
                        <td></td>
                        </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
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