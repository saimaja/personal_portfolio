import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

export default class Projects extends Component {
    render() {
        return (
            <div> 
        <Grid style={{paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px'}} stackable columns={4}>
          <Grid.Column>
            <Image src= '/images/avatar/large/ade.jpg' size='small'/>
          </Grid.Column>
          <Grid.Column>
            <Image src= ''/>
          </Grid.Column>
          <Grid.Column>
            <Image src= ''/>
          </Grid.Column>
          <Grid.Column>
            <Image src= ''/>
          </Grid.Column>
          
        </Grid>
        </div>
        )
    }
}