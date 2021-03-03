import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jcustom.css';
import { NavLink } from 'react-router-dom';
import Logo from'./components/jeem-logo.png'
// import Classes from './components/Classes';
import Landing from './components/Landing';
import Home from './components/Home';
import UserClassForm from './components/UserClassForm';
import AllClasses from './components/AllClasses';
import BestRated from './components/BestRated';
import Professors from './components/Professors';



import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand as={NavLink} to={'/home'}>
            <img src={Logo} className="img-responsive" alt="WiCS Database" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={'/contribute'}>Contribute</Nav.Link>
            <NavDropdown title="Browse" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={'/all-classes'}>All Classes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={'/best-rated'}>Best Rated</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={'/professors'}>Professors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to={'/connect'}>Connect</Nav.Link> 
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>

        <Route exact path="/contribute">
          <UserClassForm />
        </Route>

        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/all-classes">
          <AllClasses />

        </Route>
    
        {/* <Route path="/all-classes">
          <Classes sort={'All Classes'}/>
        </Route> */}

        <Route exact path="/best-rated">
          <BestRated />
        </Route>

        <Route exact path="/professors">
          <Professors />
        </Route>

        <Route exact path="/connect">
          <UserClassForm />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;