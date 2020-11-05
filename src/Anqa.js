import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap'
import elicit_img from './images/elicit.png'
import './App.css'

export default class Anqa extends Component {
    render() {
        return (
            <>
                <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

                    <Grid.Column style={{ width: '67%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'right' }} className='cv-caption-text'><strong>ANQA</strong></div>
                        <Divider></Divider>

                        <div style={{ textAlign: 'right' }}><i>The practice of digitizing cultural heritage is gaining ground among conservation scientists and scholars in architecture, art history, computer science and other related fields. Recently the location of such sites in areas of intense conflict has highlighted the urgent need for documenting cultural heritage for the purposes of preservation and posterity. The recording of such sites, however, is not limited to their digitization but should also include their meaningful interpretation with respect to intangible values. This practice necessitates new tools, which go a step beyond simple digitization.

Project Anqa is an attempt to counter the devastating loss of cultural heritage throughout the Middle East, most notably in Syria and Iraq. Through an interdisciplinary process, Anqa collects and processes data, historical contextualizes it, and makes information accessible and useful scholars, peers, and the general public through state-of-the-art tools, which include photogrammetry and laser scanning.

The project works with support from Arcadia Fund, UK (https://www.arcadiafund.org.uk/) and through partnerships with CyArk (www.cyark.org), the International Council on Monuments and Sites (ICOMOS) (http://www.icomos.org), and Yale University. What sets Anqa apart is our effort to engage in capacity-building on the ground, as well as to create an educational web platform that informs viewers about cultural heritage in the region through research, digital storytelling, and the experience of virtual environments.</i>
                            <br />
                            <br />
                            <div style={{ textAlign: 'left' }}>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>

                <Grid style={{ paddingLeft: '70px', paddingRight: '70px', backgroundColor: '#ececec' }} stackable columns={2}>
                    <Grid.Column style={{ width: '70%' }}>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={elicit_img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Second slide&bg=282c34"
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Third slide&bg=20232a"
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                        {/* <Embed
                            id='455662095'
                            placeholder={trivia_demo}
                            source='vimeo'
                        /> */}
                    </Grid.Column>

                    <Grid.Column style={{ width: '30%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'left' }}>
                            <div className='dropdown' >
                                <div className='button'>View Code</div>
                                <div className='dropdown-content'>
                                    <a href='https://github.com/saimaja/mon_frontend' rel="noopener noreferrer" target='_blank'>Frontend</a>
                                    <a href='https://github.com/saimaja/mon_backend' rel="noopener noreferrer" target='_blank'>Backend</a>
                                </div>
                            </div>
                            <a href='http://monumentz.herokuapp.com/' rel="noopener noreferrer" className='button' target='_blank'>Live Demo</a>
                            <br />
                            <br />
                            <div style={{ fontWeight: '900' }}>
                                + Utilized React, Mapbox GL, and Semantic UI for an efficient client-side experience with dynamic visualizations
                    <br />
                    + Developed Rails backend with API endpoints for fetch requests and PostgreSQL for data persistence
                    <br />
                    + Adhered to RESTful conventions, applied MVC pattern, and built out core CRUD functionality
                    <br />
                    + Data seeded from the Southern Poverty Law Center's <a className='link' href='https://www.splcenter.org/20190201/whose-heritage-public-symbols-confederacy' rel="noopener noreferrer" target='_blank'>Whose Heritage Project</a>
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

