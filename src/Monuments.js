import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import { Carousel } from 'react-bootstrap'
import landing_page from './images/monuments/1.png'
import landing_search from './images/monuments/2.png'
import monument_detail from './images/monuments/4.png'
import map from './images/monuments/5.png'
import map_filter from './images/monuments/6.png'
import profile from './images/monuments/7.png'
import read_blog from './images/monuments/8.png'
import create_blog from './images/monuments/9.png'
import edit_blog from './images/monuments/10.png'
import delete_blog from './images/monuments/11.png'
import blog_feed from './images/monuments/12.png'
import './App.css'

export default class Monuments extends Component {
    render() {
        return (
            <>
             <div style={{ textAlign: 'right', paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px'}} className='cv-caption-text'>MONUMENTS
                        <Divider ></Divider></div>
                <Grid stackable columns={2} style={{ paddingLeft: '70px', paddingRight: '70px'}} >

                    <Grid.Column >
                        <div className='project-description' style={{ textAlign: 'justify', width: '75%', fontWeight: '900' }}>
                        <i>A site where users can visualize and critically reflect on the current landscape of confederate monuments in the United States.
                               The data is seeded from the Southern Poverty Law Center's <a className='link' href='https://www.splcenter.org/20190201/whose-heritage-public-symbols-confederacy' target='_blank' rel="noopener noreferrer" >Whose Heritage Project</a>, which
                               is vetted and updated on a daily basis.</i>
                               <Divider></Divider>
                        </div>
                    </Grid.Column>
                </Grid>
                
                


                <Grid style={{ paddingLeft: '70px', paddingRight: '70px', backgroundColor: '#ececec' }} stackable columns={2}>
                    <Grid.Column style={{ width: '70%' }}>
                        <Carousel >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={landing_page}
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={landing_search}
                                    alt="Second slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Second slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={monument_detail}
                                    alt="Third slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Third slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={map}
                                    alt="Fourth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Fourth slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={map_filter}
                                    alt="Fifth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Fifth slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={profile}
                                    alt="Sixth slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Sixth slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={read_blog}
                                    alt="Seventh slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Seventh slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={create_blog}
                                    alt="Eighth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Eighth slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        

                        <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={edit_blog}
                                    alt="Ninth slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Ninth slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={delete_blog}
                                    alt="Tenth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Tenth slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={blog_feed}
                                    alt="Eleventh slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.6'}}>
                                    <h3>Eleventh slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
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
