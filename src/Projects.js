import React, { Component } from 'react'
// import { Grid } from 'semantic-ui-react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { Link } from 'react-router-dom'
import { Grid, Divider } from 'semantic-ui-react'
import elicit_img from './images/elicit.png'
import IFOTF_img from './images/IFOTF.png'
import monuments_img from './images/monuments.png'
import multitudes_img from './images/multitudes.png'
import trivia_img from './images/trivia.png'
import './App.css'

export default class Projects extends Component {
    render() {
        return (
           

             <MDBContainer className="mt-4">
            <Grid style={{paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px'}} stackable columns={2}>
            
            <MDBRow>

            <Grid.Column style={{width: '30%', paddingTop: '0', paddingBottom: '0'}} className='cv-caption-text'>
            DIGITAL
                
         
            </Grid.Column>
          <Grid.Column style={{ width: '100%', paddingTop: '0' }}><Divider /></Grid.Column>

            <MDBCol md="4">
                <Link to={'/projects/monuments'}>
                <MDBView hover zoom>
                  <img
                    src={monuments_img}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center" 
                   overlay = 'teal-strong'>
                    <p className="project-text">MONUMENTS</p>
                  </MDBMask>
                </MDBView>
                </Link>
              </MDBCol>

            
          <MDBCol md="4">
          <Link to={'/projects/elicit'}>
            <MDBView hover zoom>
              <img
                src={elicit_img}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center"
              overlay = 'teal-strong'>
                <p className="project-text">E-LICIT ART</p>
              </MDBMask>
            </MDBView>
            </Link>
          </MDBCol>

          <MDBCol md="4">
          <Link to={'/projects/trivia'}>
                <MDBView hover zoom>
                  <img
                    src={trivia_img}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center"
                   overlay = 'teal-strong' >
                    <p className="project-text">TRIVIA</p>
                  </MDBMask>
                </MDBView>
                </Link>
              </MDBCol>
              </MDBRow>
           

              <MDBRow className="mt-4">
              <Grid.Column style={{width: '30%', paddingTop: '0', paddingBottom: '0'}} className='cv-caption-text'>
            CURATORIAL

            </Grid.Column>
          <Grid.Column style={{ width: '100%', paddingTop: '0' }}><Divider /></Grid.Column>
              
              <MDBCol md="4">
              <Link to={'/projects/multitudes'}>
                <MDBView hover zoom>
                  <img
                    src={multitudes_img}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center"
                   overlay = 'teal-strong' >
                    <p className="project-text">MULTITUDES</p>
                  </MDBMask>
                </MDBView>
                </Link>
              </MDBCol>

              <MDBCol md="4">
              <Link to={'/projects/ifotf'}>
                <MDBView hover zoom>
                  <img
                    src={IFOTF_img}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center"
                   overlay = 'teal-strong' >
                    <p className="project-text">IN FRONT OF THE FACTORY</p>
                  </MDBMask>
                </MDBView>
                </Link>
              </MDBCol>
        </MDBRow> 
        </Grid> 
      </MDBContainer> 
      
    
  
 
      
            // <div>
            //     <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={4}>
            //     <MDBView hover>
            //   <img src={monuments}
            //     className="img-fluid"
            //     alt=""/>
            //   <MDBMask className="flex-center" overlayteal-strong">
            //     <p className="project-text">Strong overlay</p>
            //   </MDBMask>
            //   </MDBView>
                    /* <Grid.Column className='Change'>
                        {/* <Reveal animated='fade'>
                            <Reveal.Content visible> */
                                /* <Image className='Change' src={monuments} size='medium' circular/> */
                            /* </Reveal.Content>
                           <Reveal.Content hidden> 
                                <Image src={trivia} size='medium' />
                            </Reveal.Content> 
                        </Reveal> */
                    /* </Grid.Column>
                    <Grid.Column className='Change'>
                        <Image src={trivia} size='medium' circular />
                    </Grid.Column>
                    <Grid.Column className='Change'>
                        <Image src={IFOTF} size='medium' circular />
                    </Grid.Column >
                    <Grid.Column className='Change'>
                        <Image src={elicit} size='medium' circular />
                    </Grid.Column>
                    <Grid.Column className='Change'>
                        <Image src={multitudes} size='medium' circular />
                    </Grid.Column>  */

                /* </Grid> */
            /* </div> */
        )
    }
}

