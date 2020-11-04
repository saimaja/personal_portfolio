import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import pic from './images/saimaprofile.png'
import './App.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <img className='image-component' src={pic} alt={pic} />
        </div>
        <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

          <Grid.Column style={{ width: '30%' }} className='text'>
          
            {/* <span style={{marginLeft: '5px'}}> Say hello!</span>
          <br />
          <br />
                <a href="mailto:saimaakhtar@gmail.com"><Icon className='mail-color Change' circular name='mail'size='large' /></a>
                <a href="https://www.linkedin.com/in/saimaakhtar/" target="_blank" rel="noopener noreferrer" ><Icon className='linkedin-color Change' circular name='linkedin' size='large'/></a>
                <a href="https://github.com/saimaja" target="_blank" rel="noopener noreferrer"><Icon className='github-color Change' circular name='github' size='large'/></a>
                <a href="https://www.twitter.com/saimajakhtar" target="_blank" rel="noopener noreferrer"><Icon className='twitter-color Change' circular name='twitter'size='large' /></a>
               */}
          </Grid.Column>
          <Grid.Column style={{ width: '70%', textAlign: 'justify' }} className='text'>
            I'm an interdisciplinary designer with a background in architecture and urban studies. As a trained social scientist and programmer,
          the questions that drive me are at the intersection of technology and design -- whether I’m <a className='link' href="http://www.saimaakhtar.com/projects" >building</a> user-friendly applications
          or <a className='link' href="http://www.saimaakhtar.com/research" >writing</a> about the ethical implications of integrating technology into our everyday lives.
          <br />
            {/* I write about immigration and labor history in my hometown of Detroit, curate art exhibits, and have worked on digital projects about cultural heritage preservation. */}
            <br />
          I graduated with degrees in architecture from the <a className='link' href="https://ced.berkeley.edu/academics/architecture/programs/ph.d" target="_blank" rel="noopener noreferrer" >Center for Environmental Design at UC-Berkeley</a> (Ph.D.)
          and <a className='link' href="https://architecture.mit.edu/history-theory-and-criticism/degree/smarchs" target="_blank" rel="noopener noreferrer" >MIT</a> (SMArchS), and majored in psychology and architecture at the <a className='link' href="https://taubmancollege.umich.edu/architecture/degrees/bachelor-science" target="_blank" rel="noopener noreferrer" >University of Michigan - Ann Arbor</a>. I also completed a certificate in
          Fullstack engineering from the <a className='link' href="https://flatironschool.com/career-courses/coding-bootcamp" target="_blank" rel="noopener noreferrer" >Flatiron School</a>.
          <br />
            <br />
          I love building things and thinking, writing, and speaking about how technology impacts cities and society. If you'd like to work together or chat, please <a className='link' href="mailto:saimaakhtar@gmail.com">get in touch</a>!
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
