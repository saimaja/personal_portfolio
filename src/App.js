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
import { NavLink, Switch, Route } from 'react-router-dom'
import { Navbar, Nav} from 'react-bootstrap'
import { Divider, Grid, Icon } from 'semantic-ui-react'
import './App.css';




export default function App () {

  const [expanded, setExpanded] = useState(false);
    
    return (
      <div>
       
        <Navbar expanded={expanded} sticky='top' style={{ backgroundColor: '#ffffff', paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px', paddingBottom: '35px' }} expand="lg">
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
          <br />
          <br />
        <Divider></Divider>
        <Grid style={{ paddingLeft: '70px', paddingRight: '70px'}} stackable columns={2} >
          <Grid.Column  className='text-footer' style={{paddingTop: '30px'}}>
          <span style={{float: 'left'}} >Copyright © {new Date().getFullYear()}. All Rights Reserved.</span>
          </Grid.Column>
          <Grid.Column >
        
          <span style={{float: 'right'}} >
                <a href="mailto:saimaakhtar@gmail.com"><Icon className='mail-color Change' circular name='mail'size='large' /></a>
                <a href="https://www.linkedin.com/in/saimaakhtar/" target="_blank" rel="noopener noreferrer" ><Icon className='linkedin-color Change' circular name='linkedin' size='large'/></a>
                <a href="https://github.com/saimaja" target="_blank" rel="noopener noreferrer"><Icon className='github-color Change' circular name='github' size='large'/></a>
                <a href="https://www.twitter.com/saimajakhtar" target="_blank" rel="noopener noreferrer"><Icon className='twitter-color Change' circular name='twitter'size='large' /></a>
          </span>
        </Grid.Column>

        
        </Grid> 
      </div>

    )
  
}

