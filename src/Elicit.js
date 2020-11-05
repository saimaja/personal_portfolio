import React, { Component } from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'
import trivia_demo from './images/trivia_demo.png'
import './App.css'


export default class Elicit extends Component {
    render() {
        return (
            <>
                <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

                    <Grid.Column style={{ width: '67%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'right' }} className='cv-caption-text'><strong>E-LICIT ART</strong></div>
                        <Divider></Divider>

                        <div style={{ textAlign: 'right' }}><i>
                        E-licit Art is a faux e-commerce platform meant to encourage users to think about the origins of art, its relationship to museums, and speculative valuations. 
                How do elite institutions acquire artwork? How much of it ends up on <a className='link'
                href= 'https://www.bbc.com/culture/article/20150123-7-masterpieces-you-cant-see' rel="noopener noreferrer" target='_blank'>
                display or hidden in storage</a>? And how should we, as artistic consumers, think about their social and economic worth? 
                <br />
                <br />
                In recent years, some European and North American museums have started to reconsider the history and provenance of
                their Near Eastern and African collections, such as <a className='link' 
                href= 'https://www.theatlantic.com/international/archive/2018/03/iraq-war-archeology-invasion/555200/' rel="noopener noreferrer" target='_blank'>archaeological artifacts from Iraq</a> or <a className='link' 
                href= 'https://hyperallergic.com/456942/europol-seizure-of-looted-antiquities/' rel="noopener noreferrer" target='_blank'>looted antiquities</a>. 
                With E-licit Art, we think it's important for museum-goers to imagine the behind-the-scenes <i>trading</i> and <i>acquisition</i> of artworks, which includes their complex histories, 
                missing or lost verification information, and randomly assigned worth.
                <br />
                <br />
                The data for E-licit Art comes from the <a className='link' 
                href= 'https://www.harvardartmuseums.org/collections/api' rel="noopener noreferrer" target='_blank'>Harvard Art Museums API</a>.
                            </i></div>
                           
                    </Grid.Column>
                    <Grid.Column style={{ textAlign: 'left' }}>
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
                            <div className='dropdown' >
                                <div className='button'>View Code</div>
                                <div className='dropdown-content'>
                                    <a href='https://github.com/saimaja/e_commerce_frontend' rel="noopener noreferrer"  target='_blank'>Frontend</a>
                                    <a href='https://github.com/saimaja/e_commerce_backend' rel="noopener noreferrer" target='_blank'>Backend</a>
                                </div>
                            </div>
                            <a href='http://elicit-art.herokuapp.com/' rel="noopener noreferrer" className='button' target='_blank'>Live Demo</a>
                            <br />
                            <br />
                            <div style={{ fontWeight: '900' }}>
                            + Designed frontend with React, Javascript, Semantic UI, Bootstrap, and custom CSS for a streamlined user experience
                    <br />
                    + Created a Rails backend to handle fetch requests to external Harvard Art Museums API
                    <br />
                    + PostgreSQL for data persistence
                    <br />
                    <br />
                                Collaborator: Abhinav Sharma
                            <br />
                                Built: June 2020</div>
                        </div>
                        <br />
                    </Grid.Column>

                </Grid>
            </>
        )
    }
}

