import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import pic from './images/english.png'

export default class Research extends Component {
    render() {
        return (
            <div> 
          <div>
          <img className='image-component' src={pic} alt={pic} />
        </div>
        <Grid style={{paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px'}} stackable columns={2}>
          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
              
       
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>
        
            I am a full stack developer with a passion for human-oriented design and research.
        
          </Grid.Column>
          <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
              PEER-REVIEWED PUBLICATIONS
       
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>
        
          <span className='text'><a href="https://www.diaphanes.com/titel/film-womens-work-labour-organizing-6580" rel="noopener noreferrer" target="_blank">Film, Women's Work, and Labour Organizing</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}>In <i>minor cosmopolitan</i>, edited by Zairong Xiang, 113-127. Berlin: Diaphanes Press, 2020.</span>
          
          <span className='text'><a href="http://www.harvarddesignmagazine.org/issues/46" rel="noopener noreferrer" target="_blank">Rereading Studs Terkel’s <i>Working</i> (1972)</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Harvard Design Magazine</i>, Special Issue/No Sweat, no. 46 (F/W 2018): 107-112.</span>

          <span className='text'><a href="https://diglib.eg.org/bitstream/handle/10.2312/gch20181371/247-250.pdf?sequence=1&isAllowed=y" rel="noopener noreferrer" target="_blank">New Haven Building Archive: A Database for the Collection, Study, and Communication of Local Built Heritage</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}>E. Rubin, S. Akhtar, B. Brown, and H. Rushmeier | <i>EUROGRAPHICS Workshop on Graphics and Cultural Heritage </i> (2018): 247-250.</span>
        
          <span className='text'><a href="https://ui.adsabs.harvard.edu/abs/2017ISPAr62W5....1A/abstract" rel="noopener noreferrer" target="_blank">Project Anqa: Digitizing and Documenting Cultural Heritage in the Middle East </a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}>S. Akhtar, G. Akoglu, S. Simon, and H. 
            Rushmeier | <i>ISPRS - International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences</i> Volume XLII-2/W5 (2017): 1-5.</span>

          <span className='text'><a href="https://journals.sagepub.com/doi/10.1177/0096144214563509" rel="noopener noreferrer" target="_blank">Immigrant Island Cities in Industrial Detroit</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Journal of Urban History </i> 41.2 (2015): 175-192.</span>
          
          <span className='text'><a href="http://archnet.org/publications/10180" rel="noopener noreferrer" target="_blank">Shangri La: Architecture as Collection</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>International Journal of Islamic Architecture </i> 3.1 (2014): 103-129. </span>
          </Grid.Column>
          
          <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
              ONLINE PUBLICATIONS
       
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>
        
          <span className='text'><a href="http://www.savingplac.es/2Hvn08G" rel="noopener noreferrer" target="_blank">Using Historic Preservation to Honor a More Diverse American Story</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Saving Places</i>, Apr 27 2018</span>

          </Grid.Column>
          <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
              OTHER
       
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>

        {/* <span className='text'>Profile: <a href="http://bit.ly/2C50CjG" rel="noopener noreferrer" target="_blank">Art as a way to resist negative images and Islamophobia</a></span> */}
        {/* <span className='cv-subheader' style={{paddingBottom: '10px'}}>by Todd Moe | <i>NCPR</i>, Nov 1 2017</span> */}

        <span className='text'>Review: <a href="https://www.jstor.org/stable/10.2979/jims.1.2.10" rel="noopener noreferrer" target="_blank">Field of Vision: Homeland is Not a Series</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Journal of Islamic and Muslim Studies</i> 1.2 (2016): 98-101.</span>
      
        </Grid.Column>
        </Grid>
        </div>
        )
    }
}