import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'

export default class Contact extends Component {
    render() {
        return (

            <Grid centered style={{ paddingTop: '100px'}} stackable columns>

                <Grid.Column style={{width: '10%'}}>
                <a href="mailto:sakhtar@berkeley.edu"><Icon className='mail-color Change' circular name='mail'size='big' /></a>
                </Grid.Column>

                <Grid.Column style={{width: '10%'}}>
                <a href="https://www.linkedin.com/in/saimaakhtar/" target="_blank" rel="noopener noreferrer" ><Icon className='linkedin-color Change' circular name='linkedin' size='big'/></a>
                </Grid.Column>
                
                <Grid.Column style={{width: '10%'}}>
                <a href="https://github.com/saimaja" target="_blank" rel="noopener noreferrer"><Icon className='github-color Change' circular name='github' size='big'/></a>
                </Grid.Column>

                <Grid.Column style={{width: '10%'}}>
                <a href="https://www.twitter.com/saimajakhtar" target="_blank" rel="noopener noreferrer"><Icon className='twitter-color Change' circular name='twitter'size='big' /></a>
                </Grid.Column>
              
            </Grid>

        )
    }
}
