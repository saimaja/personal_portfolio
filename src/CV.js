import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

export default class CV extends Component {
    render() {
        return (
            <div> 
        <Grid style={{paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px'}} stackable columns={2}>
          <Grid.Column style={{width: '25%'}}>
            <b>WORK EXPERIENCE</b>
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}}>
            I am a full stack developer with a passion for human-oriented design and research. As a trained architect and urban historian, the questions that drive me are at the intersection of technology and architecture -- whether through modelling buildings in 3D, designing web platforms for urban research, or thinking about the philosophical implications of using technology to augment the built environment. I bring strong skills in creative problem solving, project management, teamwork, and critical thinking to help institutions to build better, more socially-minded technology.
          </Grid.Column>
          <Grid.Column style={{width: '25%'}}>
            <b>EDUCATION</b>
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}}>
            I am a full stack developer with a passion for human-oriented design and research. As a trained architect and urban historian, the questions that drive me are at the intersection of technology and architecture -- whether through modelling buildings in 3D, designing web platforms for urban research, or thinking about the philosophical implications of using technology to augment the built environment. I bring strong skills in creative problem solving, project management, teamwork, and critical thinking to help institutions to build better, more socially-minded technology.
          </Grid.Column>
          <Grid.Column style={{width: '25%'}}>
            <b>TECHNICAL SKILLS</b>
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}}>
            I am a full stack developer with a passion for human-oriented design and research. As a trained architect and urban historian, the questions that drive me are at the intersection of technology and architecture -- whether through modelling buildings in 3D, designing web platforms for urban research, or thinking about the philosophical implications of using technology to augment the built environment. I bring strong skills in creative problem solving, project management, teamwork, and critical thinking to help institutions to build better, more socially-minded technology.
          </Grid.Column>
          
        </Grid>
        </div>
        )
    }
}
