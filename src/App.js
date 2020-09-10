import React, { useState } from 'react'
// import logo from './logo.svg';
import Projects from './Projects';
import About from './About';
import CV from './CV';
// import Contact from './Contact';
import Research from './Research';
import Trivia from './Trivia.js'
import Elicit from './Elicit.js'
import Anqa from './Anqa.js'
import Multitudes from './Multitudes.js'
import Monuments from './Monuments.js'
import IFOTF from './IFOTF.js'
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'




export default function App () {

  const [expanded, setExpanded] = useState(false);
    
    return (
      <div>
       
        <Navbar expanded={expanded} sticky='top' style={{ backgroundColor: '#ffffff', paddingTop: '35px', paddingLeft: '60px', paddingRight: '60px', paddingBottom: '35px' }} expand="md">
          <Navbar.Brand as={NavLink} to="/" onClick={() => setTimeout(() => {setExpanded(false)}, 250)} className='nav-name-text Change' >SAIMA AKHTAR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to='/about' onClick={() => setTimeout(() => {setExpanded(false)}, 250)} activeStyle={{color: 'teal'}} className='nav-menu-text'>ABOUT</Nav.Link>
              <Nav.Link as={NavLink} to='/cv' onClick={() => setTimeout(() => {setExpanded(false)}, 250)} activeStyle={{color: 'teal'}} className='nav-menu-text'>CV</Nav.Link> 
              <Nav.Link as={NavLink} to="/research" onClick={() => setTimeout(() => {setExpanded(false)}, 250)} activeStyle={{color: 'teal'}} className='nav-menu-text'>RESEARCH</Nav.Link>
              <Nav.Link as={NavLink} to="/projects" onClick={() => setTimeout(() => {setExpanded(false)}, 250)} activeStyle={{color: 'teal'}} className='nav-menu-text'>PROJECTS</Nav.Link>
              {/* <Nav.Link as={NavLink} to="/contact" activeStyle={{color: 'teal'}} className='nav-menu-text'>CONTACT</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      
          <Switch>
            <Route exact path='/' render={() =>
              <About />} />

            <Route exact path='/about' render={() =>
              <About />} />

            <Route exact path='/cv' render={() =>
              <CV />} />

            <Route exact path='/research' render={() =>
              <Research />} />

            <Route exact path='/projects' render={() =>
              <Projects />} />

            {/* <Route exact path='/contact' render={() =>
              <Contact />} /> */}

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

        <Route exact path='/projects/anqa' render={() =>
          <Anqa />} />  


          </Switch>
      
      </div>

    )
  
}

