import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class CV extends Component {
    render() {
        return (
            <div> 
        <Grid style={{paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px'}} stackable columns={2}>
          <Grid.Column style={{width: '25%'}} className='cv-caption-text'>
            WORK EXPERIENCE
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>
          <span className='cv-header'>Yale University</span>
            <br/>
            Postdoctoral Associate, Department of Computer Science
          </Grid.Column>
          <Grid.Column style={{width: '25%'}} className='cv-caption-text'>
            EDUCATION
          </Grid.Column>
          <Grid.Column style={{width: '60%'}} className='text'>
            <span className='cv-header'>University of California - Berkeley</span>
            <br/>
            Doctor of Philosophy (Ph.D.), Architecture
            <br/>
            <br/>
            <span className='cv-header'>Massachusetts Institute of Technology</span>
            <br/>
            Master of Science (M.Sc.), Architecture
            <br/>
            <br/>
            <span className='cv-header'>University of Michigan - Ann Arbor</span>
            <br/>
            Bachelor of Science (B.Sc.), Psychology, Bachelor of Arts (B.A.), Architecture
            <br/>
          </Grid.Column>
          <Grid.Column style={{width: '25%'}} className='cv-caption-text'>
            TECHNICAL SKILLS
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>
            I am a full stack developer with a passion for human-oriented design and research. As a trained architect and urban historian, the questions that drive me are at the intersection of technology and architecture -- whether through modelling buildings in 3D, designing web platforms for urban research, or thinking about the philosophical implications of using technology to augment the built environment. I bring strong skills in creative problem solving, project management, teamwork, and critical thinking to help institutions to build better, more socially-minded technology.
          </Grid.Column>
          
        </Grid>
        </div>
        )
    }
}
