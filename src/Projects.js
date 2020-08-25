import React, { Component } from 'react'
import { Grid, Reveal, Image } from 'semantic-ui-react'
import { View, Mask, MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import elicit from './images/elicit.png'
import IFOTF from './images/IFOTF.png'
import monuments from './images/monuments.png'
import multitudes from './images/multitudes.png'
import trivia from './images/trivia.png'
import './App.css'

export default class Projects extends Component {
    render() {
        return (
            <MDBContainer className="mt-5">
            <MDBRow>
              <MDBCol md="4">
                <MDBView hover>
                  <img
                    src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <MDBMask className="flex-center" overlay="red-strong">
                    <p className="white-text">Strong overlay</p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol md="4">
                <MDBView hover>
                  <img
                    src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <MDBMask className="flex-center" overlay="red-light">
                    <p className="white-text">Light overlay</p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              <MDBCol md="4">
                <MDBView hover>
                  <img  src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Zoom effect</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="text-center">Shadow effect</h5>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/4.jpg"
              className="img-fluid rounded-circle hoverable"
              alt=""
            />
           
          </MDBCol>
        </MDBRow>
     
      </MDBContainer>
  
  
 
      
            // <div>
            //     <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={4}>
            //     <MDBView hover>
            //   <img src={monuments}
            //     className="img-fluid"
            //     alt=""/>
            //   <MDBMask className="flex-center" overlay="red-strong">
            //     <p className="white-text">Strong overlay</p>
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