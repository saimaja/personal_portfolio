import React, { Component } from 'react'
// import logo from './logo.svg';
import Projects from './Projects';
import About from './About';
import CV from './CV';
import Contact from './Contact';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Loader } from 'semantic-ui-react'
import pic from './images/saimaprofile.png'



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar style={{paddingTop:'35px', paddingLeft: '80px', paddingRight: '80px', paddingBottom: '35px'}} collapseOnSelect expand="lg" >
          <Navbar.Brand href="#home">Saima Akhtar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">CV</Nav.Link>
              <Nav.Link href="#deets">Projects</Nav.Link>
              <Nav.Link href="#memes">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       <div>
        <img className='image-component' src={pic} alt={pic}/>
      </div>
      </div>

    )
  }
}

