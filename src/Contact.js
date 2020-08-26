import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'

export default class Contact extends Component {
    render() {
        return (

            <Grid style={{ paddingTop: '100px', paddingLeft: '150px' }} stackable columns={4}>

                <Grid.Column>
                <Icon circular name='github' size='big'/>
                </Grid.Column>

                <Grid.Column>
                <Icon circular name='twitter'size='big' />
                </Grid.Column>

                <Grid.Column>
                <Icon circular name='linkedin' size='big'/>
                </Grid.Column>

                <Grid.Column>
                <Icon circular name='mail'size='big' />
                </Grid.Column>
              
            </Grid>

        )
    }
}
