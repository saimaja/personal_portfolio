import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'

export default class CV extends Component {
    render() {
        return (
            <div>
                <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={3}>
                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        WORK EXPERIENCE
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                        <span className='cv-header'>Postdoctoral Associate</span>
                        <br />
                            Yale University, Department of Computer Science <br />
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> New Haven, CT | 2016-2019</span>
                      
                        <span>Managed cultural heritage preservation projects between the fields of computer science and architecture. Oversaw a team of
                            computer science students and researchers to develop <i>Anqa</i>, an open access web platform documenting six cultural heritage sites in Damascus, Syria. 
                            Spearheaded workshops, research, design, and wireframing, with an emphasis on ethical preservation practices and storytelling from the ground up.
                            To learn more, click
                            <a href='/projects/anqa'> here.</a></span>
                        <br />
                        <br />
                        <span className='cv-header'>Curator</span>
                        <br />
                            Richard F. Brush Gallery, St. Lawrence University <br />
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> Canton, NY | Fall 2017</span>
                       
                        <span>Co-curated <a href='https://www.stlawu.edu/content/multitudes-art-exhibition-age-muslimban' rel="noopener noreferrer" target='_blank'>Multitudes: An Art Exhibit in the Age of the #muslimban</a>,
                            an exhibition aimed at transcending narrow representations of Muslims in popular culture.
                            The selected work reflects eight artists' cutting-edge and subversive commentaries
                            on contemporary society that also relate to their own complex identities. To learn more, or to view the artwork, click
                            <a href='/projects/multitudes'> here.</a></span>
                        <br />
                        <br />
                        <span className='cv-header'>Innovation Fellow</span>
                        <br />
                            Gobee Group 
                        <br />
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> Oakland, CA | 2014</span>
                      
                        <span> Conducted research based on design thinking for <a href='https://www.cell-ed.com/' rel="noopener noreferrer" target='_blank'>Cell-ED</a>, an English-as-a-Second-Language (ESL) educational 
                            startup for adult learning. Wrote briefs and <a href='https://gobeefellows.wordpress.com/2014/08/04/an-education/' rel="noopener noreferrer" target='_blank'>literacy analyses </a> 
                            that focused on improving access to English learning for adults in upstate New York, and assisted in improving pedagogical design.</span>


                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        EDUCATION
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%' }} className='text'>
                        <span className='cv-header'>University of California - Berkeley</span>
                        <br />
                            Doctor of Philosophy (Ph.D.), Department of Architecture
                        <span className='cv-subheader' style={{lineHeight: '1.5'}}> Designated Emphasis: Global Metropolitan Studies<br />
                        Dissertation: <i>Corporate Empire: Fordism and the Making of Immigrant Detroit</i></span>
                        <br />

                        <span className='cv-header'>Massachusetts Institute of Technology</span>
                        <br />
                            Master of Science (M.Sc.), Architecture
                        <span className='cv-subheader' style={{lineHeight: '1.5'}}>
                            Thesis: <i>Shangri La: Architecture as Collection</i></span>
                        <br />

                        <span className='cv-header'>University of Michigan - Ann Arbor</span>
                        <br />
                            Bachelor of Science (B.Sc.), Psychology, Bachelor of Arts (B.A.), Architecture
                        <br />
                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        SKILLS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                        <span className='cv-header'>Technical</span><br />
                            Ruby, Ruby on Rails, SQL, JavaScript, React, HTML, CSS, Git, Semantic, Bootstrap, Adobe Creative Suite, AutoCAD, ArcGIS, Revit
                        <br />

                        <span className='cv-header'>Languages</span><br />
                            Urdu, Arabic (proficient)
                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        TEACHING
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                    {/* <span className='cv-header'>Teaching + Invited Talks (Selected)</span><br /> */}
                        <span className='text'>Invited Critic, <a href="https://www.architecture.yale.edu/courses/23781-advanced-design-studio" rel="noopener noreferrer" target="_blank">Myths of Permanent Cities</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University, Department of Architecture | Advanced Design Studio | Spring 2019</span>
                        <span className='text'>Invited Critic, <a href="https://www.architecture.yale.edu/courses/24550-ghost-towns" rel="noopener noreferrer" target="_blank">Ghost Towns</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University, Department of Architecture | Graduate Studio-Seminar | Spring 2018</span>
                        <span className='text'>Guest Lecturer, "Industrial Detroit", <a href="https://www.architecture.yale.edu/courses/24550-ghost-towns" rel="noopener noreferrer" target="_blank">Ghost Towns</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University, Department of Architecture | Graduate Studio-Seminar | Spring 2018</span>
                        <span className='text'>Curator's Lecture, "Orientalism and Art", <a href="https://www.stlawu.edu/content/multitudes-art-exhibition-age-muslimban" rel="noopener noreferrer" target="_blank">Multitudes Exhibit Opening</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>St. Lawrence University | Canton, NY | Fall 2017</span>
                        <span className='text'>Instructor, Energy, Society, and Environmental Design</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley, Department of Architecture | Spring 2014</span>
                        <span className='text'>Teaching Assistant, American Cultural Landscapes</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley, Geography and American Studies | Fall 2012</span>
                        <span className='text'>Teaching Assistant, History of Architecture and Urbanism</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley, Department of Architecture | 2008-2009</span>
                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        WORKSHOPS + TALKS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                        <span className='cv-header'>Organized</span><br />
                        <span className='text'>Ethics and the Preservation of Cultural Heritage, Workshop</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University Law School, sponsored by <a href="https://ipch.yale.edu/" rel="noopener noreferrer" target="_blank" >Yale IPCH</a> | New Haven, CT | May 2019</span>
                        <span className='text'><a href="https://artgallery.yale.edu/calendar/events/lecture-journey-heritage-risk" rel="noopener noreferrer" target="_blank" >The Journey of Heritage “At Risk”</a>, Lecture by Trinidad Rico</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University Art Gallery, sponsored by <a href="https://ipch.yale.edu/" rel="noopener noreferrer" target="_blank" >Yale IPCH</a> | New Haven, CT | May 2019</span>
                        <span className='text'><a href="https://www.ici-berlin.org/events/silvia-federici/" rel="noopener noreferrer" target="_blank" >Globalization of Women’s Work</a>, Lecture by Silvia Federici</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | July 2018</span>
                        <span className='text'><a href="https://www.ici-berlin.org/events/imaging-a-middle-east/" rel="noopener noreferrer" target="_blank" >Imaging a "Middle East"</a>, Symposium</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | July 2017</span>
                        <span className='text'><a href="https://www.ici-berlin.org/events/middle-of-where-east-of-what/" rel="noopener noreferrer" target="_blank" >Middle of Where, East of What? New Geographies of Conflict</a>, Symposium</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | July 2017</span>
                        <span className='text'><a href="https://www.ici-berlin.org/events/out-of-work/" rel="noopener noreferrer" target="_blank" >Out of Work</a>, Discussion</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | June 2017</span>
                        <span className='text'><a href="https://www.ici-berlin.org/events/in-front-of-the-factory/" rel="noopener noreferrer" target="_blank" >In Front of the Factory: Cinematic Spaces of Labour</a>, Conference + Film Screening</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin + ACUD Kino | Berlin, Germany | May 2016</span>
                        <span className='text'>Urban Planning and Social Space, Panel</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Middle Eastern Studies Association | New Orleans, LA | 2013</span>
                        <span className='text'>De-Canonizing Architectural History, Workshop</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Society of Architectural Historians | Detroit, MI | 2012</span>
                        <br />

                        <span className='cv-header'>Invited</span><br />
                        <span className='text'>Invited Talk, <a href="https://www.ici-berlin.org/events/as-workers-leave-the-factory-whats-left-behind/" rel="noopener noreferrer" target="_blank">As Workers Leave the Factory, What's Left Behind?</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | 2018</span>
                        <span className='text'>Invited Talk, <a href="https://macmillan.yale.edu/event/search-islamic-avant-garde" rel="noopener noreferrer" target="_blank">In Search of an Islamic Avante Garde</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale MacMillan Center | New Haven, CT | 2018</span>
                        <span className='text'>Invited Talk, <a href="https://managingracialcapital.wordpress.com/" rel="noopener noreferrer" target="_blank">Managing Racial Capital</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Freie Universitat | Berlin, Germany | 2017</span>
                        <span className='text'>Discussant, "Digital Heritage", <a href="http://www.carmah.berlin/otherwise-symposium/" rel="noopener noreferrer" target="_blank">CARMAH World Cafe on Museums and Heritage</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Humboldt Universitat | Berlin, Germany | 2017</span>
                        <span className='text'>Invited Talk, "Mapping the City: The Right to Public Space", <a href="https://www.lahorebiennale.org/projects/city-in-context/" rel="noopener noreferrer" target="_blank">City in Context</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Goethe-Institut + Lahore Biennale Foundation | Karachi, Pakistan | 2016</span>
                        <span className='text'>Invited Talk, <a href="https://www.birmingham.ac.uk/research/activity/ias/workshops/2016/global-middle-east-age-of-speed.aspx" rel="noopener noreferrer" target="_blank">The Global Middle East in the Age of Speed</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>University of Birmingham, Institute for Advanced Studies | Birmingham, UK | 2016</span>
                        <span className='text'>Discussant, "On Preservation", National Trust for Historic Preservation</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Rockefeller Estate | Tarrytown, NY | 2015</span>
                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        FELLOWSHIPS + GRANTS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                        <span className='text'>Public Voices Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University | New Haven, CT | 2018-2019</span>
                        <span className='text'>Irmgard Coninx Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin/Forum Transregionale Studien | Berlin, Germany | 2015-2016</span>
                        <span className='text'>Dean's Normative Time Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley | Berkeley, CA | 2013-2014</span>
                        <span className='text'>Ford Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Benson Ford Research Center | Dearborn, MI | 2012-2013</span>
                        <span className='text'>Foreign Language Area Studies Scholarship in Arabic (FLAS) </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley | Berkeley, CA | 2008-2009</span>
                        <span className='text'>Aga Khan Trust for Culture Grant </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>MIT | Cambridge, MA | 2006-2007</span>
                        <span className='text'>Doris Duke Foundation Research Grant </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>2006-2007</span>
                        <span className='text'>AIA Research Fellowship</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> American Institute of Architects (Academy of Neuroscience for Architecture) | Washington, DC | 2004-2005</span>
                    </Grid.Column>
                     <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>

                    


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        OTHER
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                    <span className='text'>Co-curator, Industrial Heritage Walking Tour </span>
                    <span className='cv-subheader' style={{paddingBottom: '10px'}}><a href="https://www.artidea.org/" rel="noopener noreferrer" target="_blank">International Festival of Arts and Ideas</a> | New Haven, CT | June 2018</span>
                    </Grid.Column>

                </Grid>
            </div>
        )
    }
}
