import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'

import './App.css'

export default class IFOTF extends Component {
    render() {
        return (
            <>
             <div style={{ textAlign: 'right', paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} className='project-caption-text'>IN FRONT OF THE FACTORY
                        <Divider ></Divider></div>
                <Grid style={{paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

                    <Grid.Column>

                    </Grid.Column>

                </Grid>

                <Grid style={{ paddingLeft: '70px', paddingRight: '70px', backgroundColor: '#ececec' }} stackable columns={2}>
                    <Grid.Column style={{ width: '70%' }}>

                    </Grid.Column>

                    <Grid.Column style={{ width: '30%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'left' }}>
                            <a href='https://github.com/saimaja/trivia' rel="noopener noreferrer" className='button' target='_blank'>View Code</a>
                            <br />
                            <br />
                            <div style={{ fontWeight: '900' }}>Collaborators: Rosa Barotsi and Clio Nicastro
                    <br />
                    Years: June 2020</div>
                        </div>
                        <br />
                    </Grid.Column>

                </Grid>
            </>
        )
    }
}
