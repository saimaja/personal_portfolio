import React, { Component } from 'react'
import { Grid, Reveal, Image } from 'semantic-ui-react'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import elicit from './images/elicit.png'
import IFOTF from './images/IFOTF.png'
import monuments from './images/monuments.png'
import multitudes from './images/multitudes.png'
import trivia from './images/trivia.png'
import './App.css'

export default class Projects extends Component {
    render() {
        return (
            <MDBContainer className="mt-4">
            <MDBRow>

              <MDBCol md="4">
                <MDBView hover zoom>
                  <img
                    src={multitudes}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center"
                   overlay = 'black-strong' >
                    <p className="white-text">Multitudes</p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
            
          <MDBCol md="4">
            <MDBView hover zoom>
              <img
                src={elicit}
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center"
              overlay = 'black-strong'>
                <p className="white-text">E-licit Art</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="4">
                <MDBView hover zoom>
                  <img
                    src={trivia}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center"
                   overlay = 'black-strong' >
                    <p className="white-text">Trivia</p>
                  </MDBMask>
                </MDBView>
              </MDBCol>
              </MDBRow>

              <MDBRow className="mt-5">
              <MDBCol md="4">
                <MDBView hover zoom>
                  <img
                    src={monuments}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center" 
                   overlay = 'black-strong'>
                    <p className="white-text">Monuments</p>
                  </MDBMask>
                </MDBView>
              </MDBCol>

              <MDBCol md="4">
                <MDBView hover zoom>
                  <img
                    src={IFOTF}
                    className="img-fluid"
                    alt="" />
                  <MDBMask className="flex-center"
                   overlay = 'black-strong' >
                    <p className="white-text">In Front of the Factory</p>
                  </MDBMask>
                </MDBView>
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