import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Welcome to Jeem Teem's Course Database for Dartmouth Women in STEM!</h1>
                    <h5>this was built as our project for our dali-wisp final project</h5>
                    <Button variant="primary">Learn more</Button>
                    <p>
                        this is a React Bootstrap Jumbotron
                    </p>
                </Jumbotron>

                <h3>general info</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae egestas enim, vitae tincidunt eros. Donec auctor posuere interdum. Fusce quis ante sit amet velit vulputate congue quis vestibulum augue. Duis a lobortis nisi. Fusce maximus ante eget nisi venenatis, id sollicitudin orci facilisis. Proin eu odio malesuada, tristique lacus sed, consectetur elit. Praesent laoreet sed orci vel eleifend. Aenean purus erat, feugiat congue semper in, aliquet ut neque. Mauris at porttitor arcu, vitae lacinia orci. Mauris sollicitudin risus sed maximus commodo. Donec tortor leo, euismod ut eros at, pulvinar aliquam sapien. Curabitur tempor nec est in efficitur.

                    Nullam tempor semper risus non luctus. Nullam id mollis velit. Aenean at nulla quis ante mattis ullamcorper. Duis interdum ultrices congue. In quis lorem ligula. Sed consequat vitae dui in ornare. Nam egestas, velit quis pulvinar placerat, lorem eros tempus ipsum, id luctus neque ipsum id arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu lectus a ipsum semper posuere. Mauris auctor ipsum non neque imperdiet bibendum. Etiam pretium, justo quis rhoncus iaculis, nunc lectus iaculis nibh, a elementum turpis mi non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum mauris ut mauris molestie, ac malesuada diam finibus. Morbi interdum odio eget nisl ornare, id aliquam sapien vehicula. Suspendisse ut sagittis ex. Etiam ut fringilla purus. Nam gravida nibh sapien. Curabitur viverra feugiat nulla placerat laoreet.
                </p>

                <h3>general info</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae egestas enim, vitae tincidunt eros. Donec auctor posuere interdum. Fusce quis ante sit amet velit vulputate congue quis vestibulum augue. Duis a lobortis nisi. Fusce maximus ante eget nisi venenatis, id sollicitudin orci facilisis. Proin eu odio malesuada, tristique lacus sed, consectetur elit. Praesent laoreet sed orci vel eleifend. Aenean purus erat, feugiat congue semper in, aliquet ut neque. Mauris at porttitor arcu, vitae lacinia orci. Mauris sollicitudin risus sed maximus commodo. Donec tortor leo, euismod ut eros at, pulvinar aliquam sapien. Curabitur tempor nec est in efficitur.

                    Nullam tempor semper risus non luctus. Nullam id mollis velit. Aenean at nulla quis ante mattis ullamcorper. Duis interdum ultrices congue. In quis lorem ligula. Sed consequat vitae dui in ornare. Nam egestas, velit quis pulvinar placerat, lorem eros tempus ipsum, id luctus neque ipsum id arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu lectus a ipsum semper posuere. Mauris auctor ipsum non neque imperdiet bibendum. Etiam pretium, justo quis rhoncus iaculis, nunc lectus iaculis nibh, a elementum turpis mi non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum mauris ut mauris molestie, ac malesuada diam finibus. Morbi interdum odio eget nisl ornare, id aliquam sapien vehicula. Suspendisse ut sagittis ex. Etiam ut fringilla purus. Nam gravida nibh sapien. Curabitur viverra feugiat nulla placerat laoreet.
                </p>

                <h3>general info</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae egestas enim, vitae tincidunt eros. Donec auctor posuere interdum. Fusce quis ante sit amet velit vulputate congue quis vestibulum augue. Duis a lobortis nisi. Fusce maximus ante eget nisi venenatis, id sollicitudin orci facilisis. Proin eu odio malesuada, tristique lacus sed, consectetur elit. Praesent laoreet sed orci vel eleifend. Aenean purus erat, feugiat congue semper in, aliquet ut neque. Mauris at porttitor arcu, vitae lacinia orci. Mauris sollicitudin risus sed maximus commodo. Donec tortor leo, euismod ut eros at, pulvinar aliquam sapien. Curabitur tempor nec est in efficitur.

                    Nullam tempor semper risus non luctus. Nullam id mollis velit. Aenean at nulla quis ante mattis ullamcorper. Duis interdum ultrices congue. In quis lorem ligula. Sed consequat vitae dui in ornare. Nam egestas, velit quis pulvinar placerat, lorem eros tempus ipsum, id luctus neque ipsum id arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu lectus a ipsum semper posuere. Mauris auctor ipsum non neque imperdiet bibendum. Etiam pretium, justo quis rhoncus iaculis, nunc lectus iaculis nibh, a elementum turpis mi non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum mauris ut mauris molestie, ac malesuada diam finibus. Morbi interdum odio eget nisl ornare, id aliquam sapien vehicula. Suspendisse ut sagittis ex. Etiam ut fringilla purus. Nam gravida nibh sapien. Curabitur viverra feugiat nulla placerat laoreet.
                </p>
            </div>
        );
    }
}

export default Home;
