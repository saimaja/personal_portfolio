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
                
                


                <Grid style={{ paddingLeft: '70px', paddingRight: '70px', paddingTop: '30px', paddingBottom: '30px', backgroundColor: '#ececec' }} stackable columns={2}>
                    <Grid.Column style={{ width: '70%' }}>
                        <Carousel >
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={landing_page}
                                    alt="First slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Landing page</h3>
                                    <p>Users can browse through a collection of 1900 monument 'cards' and add or remove them from their profiles based on interest.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={landing_search}
                                    alt="Second slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Filter and Search functions</h3>
                                    <p>Users can also use the responsive search bar to find a monument by name as well as filter by 'Removed' or 'Renamed' monuments .</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={monument_detail}
                                    alt="Third slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Monument details</h3>
                                    <p>Each monument 'card' holds details about the site, including monument type, year built, honoree, location, and whether there are any blogs written about it.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={map}
                                    alt="Fourth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Map feature</h3>
                                    <p>The responsive map view visualizes the location of each monument in the United States. Users can zoom in, out, and tilt, the map. </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={map_filter}
                                    alt="Fifth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Map filter</h3>
                                    <p>Filtering by 'Removed' or 'Renamed' monuments also works on the map view.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={profile}
                                    alt="Sixth slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>User profile</h3>
                                    <p>Each user has a profile with basic information, including the monuments they've added to their page. Users can delete monuments from their page, as well write, edit, and delete blogs.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={read_blog}
                                    alt="Seventh slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Blog</h3>
                                    <p>Each blog has a 'tag' feature, which associates the topic of the blog to one or more monument. Users must add a monument to their profile to tag it.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={create_blog}
                                    alt="Eighth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Write blog</h3>
                                    <p>Users can choose to tag a monument, create a title, and write content. There is no word minumum, but users will be alerted if their blog contains no content.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        

                        <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={edit_blog}
                                    alt="Ninth slide"
                                />
                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Edit blog</h3>
                                    <p>Editing a blog allows a user to change the tagged monument, as well as edit the title and content of their blog.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={delete_blog}
                                    alt="Tenth slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Delete blog</h3>
                                    <p>Users will be asked to confirm when they wish to delete content.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={blog_feed}
                                    alt="Eleventh slide"
                                />

                                <Carousel.Caption style={{color: 'black', backgroundColor: 'white', opacity: '.7'}}>
                                    <h3>Blog feed</h3>
                                    <p>All blogs are available to read and listed by date published.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                    </Grid.Column>

                    <Grid.Column style={{ width: '30%', textAlign: 'justify'}} className='text'>
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
                            <div style={{fontWeight: '900'}}>
                                + Utilized React, Mapbox GL, and Semantic UI for an efficient client-side experience with dynamic visualizations
                    <br />
                    + Developed Rails backend with API endpoints for fetch requests and PostgreSQL for data persistence
                    <br />
                    + Adhered to RESTful conventions, applied MVC pattern, and built out core CRUD functionality
                    <br />
                    + Data seeded from the Southern Poverty Law Center's <a className='link' href='https://www.splcenter.org/20190201/whose-heritage-public-symbols-confederacy' rel="noopener noreferrer" target='_blank'>Whose Heritage Project</a>
                                <br />
                                <br /></div>
                    <div className='project-description'>Built: July 2020</div>
                        </div>
                    </Grid.Column>

                </Grid>
            </>
        )
    }
}
