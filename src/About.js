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
    
          <Grid.Column style={{width: '40%'}} className='text'>
         {/* <span style={{marginLeft: '5px'}}> Say hello!</span>
          <br />
          <br />
                <a href="mailto:saimaakhtar@gmail.com"><Icon className='mail-color Change' circular name='mail'size='large' /></a>
                <a href="https://www.linkedin.com/in/saimaakhtar/" target="_blank" rel="noopener noreferrer" ><Icon className='linkedin-color Change' circular name='linkedin' size='large'/></a>
                <a href="https://github.com/saimaja" target="_blank" rel="noopener noreferrer"><Icon className='github-color Change' circular name='github' size='large'/></a>
                <a href="https://www.twitter.com/saimajakhtar" target="_blank" rel="noopener noreferrer"><Icon className='twitter-color Change' circular name='twitter'size='large' /></a>
               */}
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>
          I'm an interdisciplinary designer with a background in architecture and urban studies. As a trained social scientist and programmer, 
          the questions that drive me are at the intersection of technology and design -- whether I’m building user-friendly applications or writing 
          about the ethical implications of integrating technology into our everyday lives. I love creative problem solving
          </Grid.Column>
        </Grid>
        </div>
        )
    }
}
