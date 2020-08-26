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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
// import { Grid, Image, Segment } from 'semantic-ui-react'
// import pic from './images/saimaprofile.png'



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px', paddingBottom: '35px' }} collapseOnSelect expand="lg" >
          <Navbar.Brand className='nav-name-text Change' href="/">SAIMA AKHTAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              {/* <Nav.Link href="about">About</Nav.Link> */}
              <Nav.Link href="cv" className='nav-menu-text'>CV</Nav.Link>
              <Nav.Link href="words" className='nav-menu-text'>WORDS</Nav.Link>
              <Nav.Link href="projects" className='nav-menu-text'>PROJECTS</Nav.Link>
              <Nav.Link href="contact" className='nav-menu-text'>CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Router>
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

                <Route path='/projects/elicit' render={() =>
          <Elicit />} />

        <Route path='/projects/ifotf' render={() =>
          <IFOTF />} /> 

        <Route path='/projects/monuments' render={() =>
          <Monuments />} />

        <Route path='/projects/multitudes' render={() =>
          <Multitudes />} />

        <Route path='/projects/trivia' render={() =>
          <Trivia />} />


          </Switch>
        </Router>
      </div>





    )
  }
}

