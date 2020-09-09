import React, { Component } from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'
import trivia_demo from './images/trivia_demo.png'
import './App.css'

export default class Monuments extends Component {
    render() {
        return (
            <>
                <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

                    <Grid.Column style={{ width: '67%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'right' }} className='cv-caption-text'><strong>MONUMENTS</strong></div>
                        <Divider></Divider>

                        <div style={{ textAlign: 'right' }}><i>Browse through and critically reflect on the current landscape of confederate monuments in the United States.</i>
                            <br />
                            <br />
                            <div style={{ textAlign: 'left' }}>
                                {/* + Utilized React, Mapbox GL, and Semantic UI for an efficient client-side experience with dynamic visualizations
                    <br />
                    + Developed Rails backend with API endpoints for fetch requests and PostgreSQL for data persistence
                    <br />
                    + Adhered to RESTful conventions, applied MVC pattern, and built out core CRUD functionality
                    <br />
                    + Data seeded from csv file provided by the Southern Poverty Law Center's Whose Heritage Project */}
                    </div>
                        </div>
                    </Grid.Column>
                </Grid>

                <Grid style={{ paddingLeft: '70px', paddingRight: '70px', backgroundColor: '#ececec' }} stackable columns={2}>
                    <Grid.Column style={{ width: '70%' }}>

                        <Embed
                            id='455662095'
                            placeholder={trivia_demo}
                            source='vimeo'
                        />
                    </Grid.Column>

                    <Grid.Column style={{ width: '30%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'left' }}>
                            <a href='https://github.com/saimaja/trivia' rel="noopener noreferrer" className='button' target='_blank'>View Code</a>
                            <br />
                            <br />
                            <div style={{ fontWeight: '900' }}>
                    + Utilized React, Mapbox GL, and Semantic UI for an efficient client-side experience with dynamic visualizations
                    <br />
                    + Developed Rails backend with API endpoints for fetch requests and PostgreSQL for data persistence
                    <br />
                    + Adhered to RESTful conventions, applied MVC pattern, and built out core CRUD functionality
                    <br />
                    + Data seeded from csv file provided by the Southern Poverty Law Center's Whose Heritage Project
                    <br />
                    <br />
                    Built: July 2020</div>
                        </div>
                        <br />
                    </Grid.Column>

                </Grid>
            </>
        )
    }
}
