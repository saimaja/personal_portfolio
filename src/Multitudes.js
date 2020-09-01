import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'

export default class Multitudes extends Component {
    render() {
        return (
            <div>
                Whitman!

<Grid>
          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
          OTHER
   
      </Grid.Column>
      <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>

    <span className='text'>Profile: <a href="http://bit.ly/2C50CjG" rel="noopener noreferrer" target="_blank">Art as a way to resist negative images and Islamophobia</a></span>
    <span className='cv-subheader' style={{paddingBottom: '10px'}}>by Todd Moe | <i>NCPR</i>, Nov 1 2017</span>

    <span className='text'>Review: <a href="https://www.jstor.org/stable/10.2979/jims.1.2.10" rel="noopener noreferrer" target="_blank">Field of Vision: Homeland is Not a Series</a></span>
      <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Journal of Islamic and Muslim Studies</i> 1.2 (2016): 98-101.</span>
  
    </Grid.Column>
    </Grid>
            </div>
        )
    }
}
