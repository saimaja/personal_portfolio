import React, { Component } from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'
import trivia_demo from './images/trivia_demo.png'
import './App.css'

export default class IFOTF extends Component {
    render() {
        return (
            <>
                <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

                    <Grid.Column>

                    </Grid.Column>

                    <Grid.Column style={{ textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'right' }} className='cv-caption-text'><strong>TRIVIA</strong></div>
                        <Divider></Divider>

                        <div style={{ textAlign: 'right' }}><i>Love sports? Geography? Star Wars? Test your knowledge and compete for a position on the trivia leaderboard!</i>
                            <br />
                            <br />
                            <div style={{ textAlign: 'left' }}>
                                + Built with Ruby on Rails and vanilla Javascript
                    <br />
                    + ActiveRecord for associations
                    <br />
                    + SQLite for data persistence
                    <br />
                    + Data seeded from a third party Trivia API
                    <br />
                    + Styled with Semantic UI and custom CSS for a clean, easy-to-use gaming interface
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
                            <div style={{ fontWeight: '900' }}>Collaborator: Mert Ozkaynak
                    <br />
                    Year: June 2020</div>
                        </div>
                    </Grid.Column>

                </Grid>
            </>
        )
    }
}
