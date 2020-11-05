import React, { Component } from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap'
import elicit_img from './images/elicit.png'
import './App.css'

export default class Monuments extends Component {
    render() {
        return (
            <>
                <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

                    <Grid.Column style={{ width: '67%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                        <div style={{ textAlign: 'right' }} className='cv-caption-text'><strong>MONUMENTS</strong></div>
                        <Divider></Divider>

                        <div style={{ textAlign: 'right' }}><i>A site where users can visualize and critically reflect on the current landscape of confederate monuments in the United States.
                               The data comes from the Southern Poverty Law Center's <a href='https://www.splcenter.org/20190201/whose-heritage-public-symbols-confederacy' target='_blank' rel="noopener noreferrer" >Whose Heritage Project</a>, which
                               is vetted and updated on a daily basis.</i>
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
