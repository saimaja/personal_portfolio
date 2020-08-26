import React, { Component } from 'react'
// import logo from './logo.svg';
import Projects from './Projects';
import About from './About';
import CV from './CV';
import Contact from './Contact';
import Words from './Words';
import Trivia from './Trivia.js'
import Elicit from './Elicit.js'
import Multitudes from './Multitudes.js'
import Monuments from './Monuments.js'
import IFOTF from './IFOTF.js'
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'
// import { Grid, Image, Segment } from 'semantic-ui-react'
// import pic from './images/saimaprofile.png'



export default class App extends Component {
 

  render() {
    return (
      <div>
       
        <Navbar style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px', paddingBottom: '35px' }} collapseOnSelect expand="lg">
          <Navbar.Brand as={NavLink} to="/" className='nav-name-text Change' >SAIMA AKHTAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to='/cv' activeStyle={{color: 'teal'}} className='nav-menu-text'>CV</Nav.Link> 
              <Nav.Link as={NavLink} to="/words" activeStyle={{color: 'teal'}} className='nav-menu-text'>WORDS</Nav.Link>
              <Nav.Link as={NavLink} to="/projects" activeStyle={{color: 'teal'}} className='nav-menu-text'>PROJECTS</Nav.Link>
              <Nav.Link as={NavLink} to="/contact" activeStyle={{color: 'teal'}} className='nav-menu-text'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      
          <Switch>
            <Route exact path='/' render={() =>
              <About />} />

            {/* <Route exact path='/about' render={() =>
              <About />} /> */}

            <Route exact path='/cv' render={() =>
              <CV />} />

            <Route exact path='/words' render={() =>
              <Words />} />

            <Route exact path='/projects' render={() =>
              <Projects />} />

            <Route exact path='/contact' render={() =>
              <Contact />} />

                <Route exact path='/projects/elicit' render={() =>
          <Elicit />} />

        <Route exact path='/projects/ifotf' render={() =>
          <IFOTF />} /> 

        <Route exact path='/projects/monuments' render={() =>
          <Monuments />} />

        <Route exact path='/projects/multitudes' render={() =>
          <Multitudes />} />

        <Route exact path='/projects/trivia' render={() =>
          <Trivia />} />


          </Switch>
      
      </div>





    )
  }
}

