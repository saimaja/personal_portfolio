import React, { Component } from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'
import trivia_demo from './images/trivia_demo.png'
import looting from './images/looting.jpg'
import './App.css'


export default class Elicit extends Component {
    render() {
        return (
            <>
             <div style={{ textAlign: 'left', paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} className='project-caption-text'>E-LICIT ART
                        <Divider ></Divider></div>
                <Grid stackable centered columns={2} style={{ paddingLeft: '70px', paddingRight: '70px' }} >

                <Grid.Column >
                        <div className='project-description' style={{ textAlign: 'justify', width: '75%', fontWeight: '900' }}>
                        E-licit Art is a faux e-commerce platform meant to encourage users to think about the origins of art, its relationship to museums, and speculative valuations. 
                How do elite institutions acquire artwork? How much of it ends up on <a className='link'
                href= 'https://www.bbc.com/culture/article/20150123-7-masterpieces-you-cant-see' rel="noopener noreferrer" target='_blank'>
                display or hidden in storage</a>? And how should we, as artistic consumers, think about their social and economic worth? 
                            <Divider></Divider>
                        </div>
                        <div className='project-description' style={{textAlign: 'justify' }}>
                          <span style={{fontWeight: '900'}}>Challenge:</span>  In recent years, some European and North American museums have started to reconsider the history and provenance of
                their Middle Eastern and African collections, such as <a className='link' 
                href= 'https://www.theatlantic.com/international/archive/2018/03/iraq-war-archeology-invasion/555200/' rel="noopener noreferrer" target='_blank'>archaeological artifacts from Iraq</a> or <a className='link' 
                href= 'https://hyperallergic.com/456942/europol-seizure-of-looted-antiquities/' rel="noopener noreferrer" target='_blank'>looted antiquities</a>. 
                        <br />
                        <br />
                        <span style={{fontWeight: '900'}}>Result:</span>  With E-licit Art, we think it's important for museum-goers to imagine the behind-the-scenes <i>trading</i> and <i>acquisition</i> of artworks, which includes their complex histories, 
                missing or lost verification information, and randomly assigned worth.
                <br />
                <br />
                The data for E-licit Art is seeded from the <a className='link' 
                href= 'https://www.harvardartmuseums.org/collections/api' rel="noopener noreferrer" target='_blank'>Harvard Art Museums API</a>.
                        </div>
                    </Grid.Column>
                    <Grid.Column style={{textAlign: 'center'}}>
                        <img style={{width: '90%'}} src={looting} />
                        <br/>
                        <span className='image-caption'> 
                        Satellite imagery of looted antiquities site in Syria
                         [<a className='link' href = 'https://anthropology.dartmouth.edu/news/2015/11/perspective-syria' rel='noopener noreferrer' target='_blank'>Image Source</a>]
                        </span>
                    </Grid.Column>
                </Grid>

                <Grid centered style={{ paddingLeft: '70px', paddingRight: '70px',paddingTop: '30px', paddingBottom: '30px', backgroundColor: '#ececec' }} stackable columns={2}>
                

                    <Grid.Column style={{ width: '33%', textAlign: 'justify' }} className='text'>
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
                    </div>
                           <div className='project-description'>     
                           Collaborator: Abhinav Sharma
                            <br />
                                Built: June 2020</div>
                        </div>
                    </Grid.Column>

                </Grid>
            </>
        )
    }
}

