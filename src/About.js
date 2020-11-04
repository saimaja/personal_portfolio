import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import pic from './images/saimaprofile.png'
import './App.css';

export default class About extends Component {
    render() {
        return (
           <div> 
            <div>
          <img className='image-component' src={pic} alt={pic} />
        </div>
        <Grid style={{paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px'}} stackable columns={2}>
    
          <Grid.Column className='text'>
         {/* <span style={{marginLeft: '5px'}}> Say hello!</span>
          <br />
          <br />
                <a href="mailto:saimaakhtar@gmail.com"><Icon className='mail-color Change' circular name='mail'size='large' /></a>
                <a href="https://www.linkedin.com/in/saimaakhtar/" target="_blank" rel="noopener noreferrer" ><Icon className='linkedin-color Change' circular name='linkedin' size='large'/></a>
                <a href="https://github.com/saimaja" target="_blank" rel="noopener noreferrer"><Icon className='github-color Change' circular name='github' size='large'/></a>
                <a href="https://www.twitter.com/saimajakhtar" target="_blank" rel="noopener noreferrer"><Icon className='twitter-color Change' circular name='twitter'size='large' /></a>
               */}
          </Grid.Column>
          <Grid.Column style={{textAlign: 'justify'}} className='text'>
          Full Stack Developer with a passion for human-oriented design. As a trained architect and urban historian, the questions that drive me are at the intersection of technology and design -- whether I’m building user-friendly applications with Rails, 
          React, and Javascript, or thinking about the ethical implications of integrating technology into our everyday lives. I bring strong skills in creative problem solving, project management, and critical thinking to help businesses build better, more socially-minded technology.
          </Grid.Column>
        </Grid>
        </div>
        )
    }
}
