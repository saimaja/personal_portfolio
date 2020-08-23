import React, { Component } from 'react'
// import logo from './logo.svg';
import Projects from './Projects';
import About from './About';
import CV from './CV';
import Contact from './Contact';
import Research from './Research';
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
          <Navbar.Brand href="/">Saima Akhtar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              {/* <Nav.Link href="about">About</Nav.Link> */}
              <Nav.Link href="cv">CV</Nav.Link>
              <Nav.Link href="research">Research</Nav.Link>
              <Nav.Link href="projects">Projects</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
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

            <Route exact path='/research' render={() =>
              <Research />} />

            <Route exact path='/projects' render={() =>
              <Projects />} />

            <Route exact path='/contact' render={() =>
              <Contact />} />

          </Switch>
        </Router>
      </div>





    )
  }
}

