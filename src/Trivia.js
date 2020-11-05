import React, { Component } from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'
import trivia_demo from './images/trivia_demo.png'
import './App.css'

export default class Trivia extends Component {
    render() {
        return (
            <>
                <Grid stackable columns={2} style={{ paddingLeft: '70px', paddingRight: '70px', paddingTop: '35px' }} >

                    <Grid.Column className='text'>
                        <div style={{ textAlign: 'left' }} className='cv-caption-text'>TRIVIA</div>
                        <Divider></Divider>

                        <div style={{ textAlign: 'justify', fontWeight: '900', width: '75%' }}>
                        <i>Love sports? Geography? Star Wars? Test your knowledge and compete for a position on the trivia leaderboard!</i>
                          <Divider></Divider>
                        </div>
                    </Grid.Column>
                </Grid>

                <Grid style={{ paddingLeft: '70px', paddingRight: '70px', backgroundColor: '#ececec' }} stackable columns={2}>
                    <Grid.Column style={{ width: '67%' }}>

                        <Embed
                            id='455662095'
                            placeholder={trivia_demo}
                            source='vimeo'
                        />
                    </Grid.Column>

                    <Grid.Column style={{ width: '33%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'left' }}>
                            <a href='https://github.com/saimaja/trivia' rel="noopener noreferrer" className='button' target='_blank'>View Code</a>
                            <br />
                            <br />
                            <div style={{ fontWeight: '900' }}>
                    + Built with Ruby on Rails and vanilla Javascript
                    <br />
                    + ActiveRecord for associations
                    <br />
                    + SQLite for data persistence
                    <br />
                    + Data seeded from an external Trivia API
                    <br />
                    + Styled with Semantic UI and custom CSS for a clean, easy-to-use gaming interface
                    <br />
                    <br />
                    Collaborator: Mert Ozkaynak
                    <br />
                    Built: May 2020</div>
                        </div>
                        <br />
                    </Grid.Column>

                </Grid>
            </>
        )
    }
}
