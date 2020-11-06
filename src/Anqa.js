import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap'
import elicit_img from './images/elicit.png'
import './App.css'

export default class Anqa extends Component {
    render() {
        return (
            <>
              <div style={{ textAlign: 'right', paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} className='cv-caption-text'>PROJECT ANQA
                        <Divider ></Divider></div>
                <Grid stackable columns={2} style={{ paddingLeft: '70px', paddingRight: '70px'}} >

                    <Grid.Column >
                        <div className='project-description' style={{ textAlign: 'justify', width: '75%', fontWeight: '900' }}><i>
                        Project Anqa, conceived while at Yale University, envisions a way to counter the loss of cultural heritage sites that is not limited to digitizing buildings. It takes into account the meaningful interpretation of sites with respect to their historical context and intangible values.
                        This necessitates new ways of thinking, going a step beyond simple digitization.</i>
                        <Divider></Divider>
                        </div>
                        
                        </Grid.Column> 
                </Grid>
                <Grid stackable centered columns={2} style={{ paddingLeft: '70px', paddingRight: '70px'}} >

                <Grid.Column className='text' style={{ textAlign: 'justify'}}>
                         
                                The practice of digitizing 'at-risk' cultural heritage is gaining ground among conservation scientists and scholars of architecture, archaeology, computer science and related fields.
                                The location of such sites in areas of intense conflict has triggered the appearance of a number of (primarily U.S. and European-based) emergency funds and institutional projects aimed at documenting cultural heritage for the purposes of preservation and posterity.
                                The digital recording of sites alone, however, amounts to what some would call neo-colonialist attempts at gathering, collecting, and showcasing data for the sake of institutional prestige rather than for the betterment of the societies and cities in which the sites are located.
                           
                                </Grid.Column> 
                       <Grid.Column className='text' style={{ textAlign: 'justify'}}>
                      
                        Through a collaborative and interdisciplinary process with teams 'on the ground', Anqa collects and processes data, historically contextualizes it, and makes information accessible for researchers and the general public through state-of-the-art tools, including photogrammetry and laser scanning.
                        It serves as a model for an educational web platform or app that can inform viewers about cultural heritage through ethnographic research and digital storytelling.
                      
                      
                       
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

