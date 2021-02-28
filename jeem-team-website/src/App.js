import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jcustom.css';
import { NavLink } from 'react-router-dom';
import Classes from './components/Classes';
import Home from './components/Home';
import Landing from './components/Landing';
import UserClassForm from './components/UserClassForm';



import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to={'/home'}>WiCS Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={'/form'}>Contribute</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={'/all-classes'}>All Classes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={'/best-rated'}>Best Rated</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/all-classes">
          <Classes sort={'All Classes'}/>
        </Route>
        <Route path="/best-rated">
          <Classes sort={'Best Rated'}/>
        </Route>
        <Route path="/form">
          <UserClassForm />
        </Route>
        <Route exact path="">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
