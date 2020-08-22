import React, { Component } from 'react'
// import logo from './logo.svg';
import Projects from './Projects';
import About from './About';
import CV from './CV';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { Loader } from 'semantic-ui-react'



export default class App extends Component {
  render() {
    return (

      <Navbar collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home">Saima Akhtar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">CV</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">Projects</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

