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
        
            I write about architecture, cities, labor + immigration, technology, cultural heritage, and preservation.
            {/* I am a full stack developer with a passion for human-oriented design and research. */}
        
          </Grid.Column>
          <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
              PEER-REVIEWED PUBLICATIONS
       
          </Grid.Column>
          <Grid.Column style={{width: '60%'}}>
        
          <span className='text'><a className='link' href="https://www.diaphanes.com/titel/film-womens-work-labour-organizing-6580" rel="noopener noreferrer" target="_blank">Film, Women's Work, and Labour Organizing</a></span>
          <div className='cv-subheader' style={{paddingBottom: '10px'}}>In <i>minor cosmopolitan</i>, edited by Zairong Xiang, 113-127. Berlin: Diaphanes Press, 2020.</div>
          
          <span className='text'><a className='link' href="http://www.harvarddesignmagazine.org/issues/46" rel="noopener noreferrer" target="_blank">Rereading Studs Terkel’s <i>Working</i> (1972)</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Harvard Design Magazine</i>, Special Issue/No Sweat, no. 46 (F/W 2018): 107-112.</span>

          <span className='text'><a className='link' href="https://diglib.eg.org/bitstream/handle/10.2312/gch20181371/247-250.pdf?sequence=1&isAllowed=y" rel="noopener noreferrer" target="_blank">New Haven Building Archive: A Database for the Collection, Study, and Communication of Local Built Heritage</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}>E. Rubin, S. Akhtar, B. Brown, and H. Rushmeier | <i>EUROGRAPHICS Workshop on Graphics and Cultural Heritage </i> (2018): 247-250.</span>
        
          <span className='text'><a className='link' href="https://ui.adsabs.harvard.edu/abs/2017ISPAr62W5....1A/abstract" rel="noopener noreferrer" target="_blank">Project Anqa: Digitizing and Documenting Cultural Heritage in the Middle East </a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}>S. Akhtar, G. Akoglu, S. Simon, and H. 
            Rushmeier | <i>ISPRS - International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences</i> Volume XLII-2/W5 (2017): 1-5.</span>

          <span className='text'><a className='link' href="https://journals.sagepub.com/doi/10.1177/0096144214563509" rel="noopener noreferrer" target="_blank">Immigrant Island Cities in Industrial Detroit</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Journal of Urban History </i> 41.2 (2015): 175-192.</span>
          
          <span className='text'><a className='link' href="http://archnet.org/publications/10180" rel="noopener noreferrer" target="_blank">Shangri La: Architecture as Collection</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>International Journal of Islamic Architecture </i> 3.1 (2014): 103-129. </span>
          </Grid.Column>
          
          <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
              REVIEWS
       
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>

        {/* <span className='text'>Profile: <a href="http://bit.ly/2C50CjG" rel="noopener noreferrer" target="_blank">Art as a way to resist negative images and Islamophobia</a></span> */}
        {/* <span className='cv-subheader' style={{paddingBottom: '10px'}}>by Todd Moe | <i>NCPR</i>, Nov 1 2017</span> */}

        <span className='text'>Film Review: <a className='link' href="https://www.jstor.org/stable/10.2979/jims.1.2.10" rel="noopener noreferrer" target="_blank">Field of Vision: Homeland is Not a Series</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Journal of Islamic and Muslim Studies</i> 1.2 (2016): 98-101.</span>
      
        </Grid.Column>
        <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


          <Grid.Column style={{width: '30%'}} className='cv-caption-text'>
          
              ONLINE PUBLICATIONS
       
          </Grid.Column>
          <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>
        
          <span className='text'><a className='link' href="http://www.savingplac.es/2Hvn08G" rel="noopener noreferrer" target="_blank">Using Historic Preservation to Honor a More Diverse American Story</a></span>
          <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Saving Places</i>, Apr 27 2018</span>

          </Grid.Column>
          <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

          <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        WORKSHOPS + TALKS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%' }} className='text'>
                        <span className='cv-header'>Organized</span><br />
                        <span className='text'>Ethics and the Preservation of Cultural Heritage, Workshop</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University Law School, sponsored by <a className='link' href="https://ipch.yale.edu/" rel="noopener noreferrer" target="_blank" >Yale IPCH</a> | New Haven, CT | May 2019</span>
                        <span className='text'><a className='link' href="https://artgallery.yale.edu/calendar/events/lecture-journey-heritage-risk" rel="noopener noreferrer" target="_blank" >The Journey of Heritage “At Risk”</a>, Lecture by Trinidad Rico</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University Art Gallery, sponsored by <a className='link' href="https://ipch.yale.edu/" rel="noopener noreferrer" target="_blank" >Yale IPCH</a> | New Haven, CT | May 2019</span>
                        <span className='text'><a className='link' href="https://www.ici-berlin.org/events/silvia-federici/" rel="noopener noreferrer" target="_blank" >Globalization of Women’s Work</a>, Lecture by Silvia Federici</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | July 2018</span>
                        <span className='text'><a className='link' href="https://www.ici-berlin.org/events/imaging-a-middle-east/" rel="noopener noreferrer" target="_blank" >Imaging a "Middle East"</a>, Symposium</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | July 2017</span>
                        <span className='text'><a className='link' href="https://www.ici-berlin.org/events/middle-of-where-east-of-what/" rel="noopener noreferrer" target="_blank" >Middle of Where, East of What? New Geographies of Conflict</a>, Symposium</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | July 2017</span>
                        <span className='text'><a className='link' href="https://www.ici-berlin.org/events/out-of-work/" rel="noopener noreferrer" target="_blank" >Out of Work</a>, Discussion</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | June 2017</span>
                        <span className='text'><a className='link' href="https://www.ici-berlin.org/events/in-front-of-the-factory/" rel="noopener noreferrer" target="_blank" >In Front of the Factory: Cinematic Spaces of Labour</a>, Conference + Film Screening</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin + ACUD Kino | Berlin, Germany | May 2016</span>
                        <span className='text'>Urban Planning and Social Space, Panel</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Middle Eastern Studies Association | New Orleans, LA | 2013</span>
                        <span className='text'>De-Canonizing Architectural History, Workshop</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Society of Architectural Historians | Detroit, MI | 2012</span>
                        <br />

                        <span className='cv-header'>Invited</span><br />
                        <span className='text'>Invited Talk, <a className='link' href="https://www.ici-berlin.org/events/as-workers-leave-the-factory-whats-left-behind/" rel="noopener noreferrer" target="_blank">As Workers Leave the Factory, What's Left Behind?</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | 2018</span>
                        <span className='text'>Invited Talk, <a className='link' href="https://macmillan.yale.edu/event/search-islamic-avant-garde" rel="noopener noreferrer" target="_blank">In Search of an Islamic Avante Garde</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale MacMillan Center | New Haven, CT | 2018</span>
                        <span className='text'>Invited Talk, <a className='link' href="https://managingracialcapital.wordpress.com/" rel="noopener noreferrer" target="_blank">Managing Racial Capital</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Freie Universitat | Berlin, Germany | 2017</span>
                        <span className='text'>Discussant, "Digital Heritage", <a className='link' href="http://www.carmah.berlin/otherwise-symposium/" rel="noopener noreferrer" target="_blank">CARMAH World Cafe on Museums and Heritage</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Humboldt Universitat | Berlin, Germany | 2017</span>
                        <span className='text'>Invited Talk, "Mapping the City: The Right to Public Space", <a className='link' href="https://www.lahorebiennale.org/projects/city-in-context/" rel="noopener noreferrer" target="_blank">City in Context</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Goethe-Institut + Lahore Biennale Foundation | Karachi, Pakistan | 2016</span>
                        <span className='text'>Invited Talk, <a className='link' href="https://www.birmingham.ac.uk/research/activity/ias/workshops/2016/global-middle-east-age-of-speed.aspx" rel="noopener noreferrer" target="_blank">The Global Middle East in the Age of Speed</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>University of Birmingham, Institute for Advanced Studies | Birmingham, UK | 2016</span>
                        <span className='text'>Discussant, "On Preservation", National Trust for Historic Preservation</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Rockefeller Estate | Tarrytown, NY | 2015</span>
                    </Grid.Column>          
          
        </Grid>
        </div>
        )
    }
}