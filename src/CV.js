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
                    <Grid.Column style={{ width: '60%'}} className='text'>
                        <span className='cv-header'>Postdoctoral Associate</span>
                        <br />
                            Yale University, Department of Computer Science <br />
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> New Haven, CT | 2016-2019</span>
                      
                        <div style={{textAlign: 'justify'}}>Managed cultural heritage preservation projects between the fields of computer science and architecture. Oversaw a team of
                            computer science students and researchers to develop <i>Anqa</i>, an open access web platform documenting six cultural heritage sites in Damascus, Syria. 
                            Spearheaded workshops, research, design, and wireframing, with an emphasis on ethical preservation practices and storytelling from the ground up.
                            To learn more, click
                            <a className='link' href='/projects/anqa'> here.</a></div>
                        <br />
                        <br />
                        <span className='cv-header'>Curator</span>
                        <br />
                            Richard F. Brush Gallery, St. Lawrence University <br />
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> Canton, NY | Fall 2017</span>
                       
                        <div style={{textAlign: 'justify'}}>Co-curated <a className='link' href='https://www.stlawu.edu/content/multitudes-art-exhibition-age-muslimban' rel="noopener noreferrer" target='_blank'>Multitudes: An Art Exhibit in the Age of the #muslimban</a>,
                            an exhibition aimed at transcending narrow representations of Muslims in popular culture.
                            The selected work reflects eight artists' cutting-edge and subversive commentaries
                            on contemporary society that also relate to their own complex identities. To learn more, or to view the artwork, click
                            <a className='link' href='/projects/multitudes'> here.</a></div>
                        <br />
                        <br />
                        <span className='cv-header'>Instructor</span>
                        <br />
                            University of California - Berkeley
                        <br />
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> Berkeley, CA | 2008-2014</span>
                      
                        <div style={{textAlign: 'justify'}}>Taught upper- and lower-level undergraduate courses in the fields of architecture + urbanism, design, geography, and American studies.</div>
                        <br />
                        <br />
                        <span className='cv-header'>Innovation Fellow</span>
                        <br />
                            Gobee Group 
                        <br />
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> Oakland, CA | 2014</span>
                      
                        <div style={{textAlign: 'justify'}}> Conducted research based on design thinking for <a className='link' href='https://www.cell-ed.com/' rel="noopener noreferrer" target='_blank'>Cell-ED</a>, an English-as-a-Second-Language (ESL) educational 
                            startup for adult learning. Wrote briefs and <a className='link' href='https://gobeefellows.wordpress.com/2014/08/04/an-education/' rel="noopener noreferrer" target='_blank'>literacy analyses </a> 
                            that focused on improving access to English learning for adults in upstate New York, and assisted in improving pedagogical design.</div>


                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        EDUCATION
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%' }} className='text'>
                        <span className='cv-header'>University of California - Berkeley</span>
                        <br />
                            Doctor of Philosophy (Ph.D.), Department of Architecture
                        <span className='cv-subheader' style={{lineHeight: '1.5'}}> 
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
                    <Grid.Column style={{ width: '60%'}} >
                    {/* <span className='cv-header'>Teaching + Invited Talks (Selected)</span><br /> */}
                        <span className='cv-caption-text'>Invited Critic, <a className='link' href="https://www.architecture.yale.edu/courses/23781-advanced-design-studio" rel="noopener noreferrer" target="_blank">Myths of Permanent Cities</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University, Department of Architecture | Advanced Design Studio | Spring 2019</span>
                        <span className='cv-caption-text'>Invited Critic, <a className='link' href="https://www.architecture.yale.edu/courses/24550-ghost-towns" rel="noopener noreferrer" target="_blank">Ghost Towns</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University, Department of Architecture | Graduate Studio-Seminar | Spring 2019</span>
                        <span className='cv-caption-text'>Guest Lecturer, "Industrial Detroit", <a className='link' href="https://www.architecture.yale.edu/courses/24550-ghost-towns" rel="noopener noreferrer" target="_blank">Ghost Towns</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University, Department of Architecture | Graduate Studio-Seminar | Spring 2018</span>
                        <span className='cv-caption-text'>Curator's Lecture, "Orientalism and Art", <a className='link' href="https://www.stlawu.edu/content/multitudes-art-exhibition-age-muslimban" rel="noopener noreferrer" target="_blank">Multitudes Exhibit Opening</a> </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>St. Lawrence University | Canton, NY | Fall 2017</span>
                        <span className='cv-caption-text'>Instructor, Energy, Society, and Environmental Design</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley, Department of Architecture | Spring 2014</span>
                        <span className='cv-caption-text'>Teaching Assistant, American Cultural Landscapes</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley, Geography and American Studies | Fall 2012</span>
                        <span className='cv-caption-text'>Teaching Assistant, History of Architecture and Urbanism</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley, Department of Architecture | 2008-2009</span>
                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        CURATED PROJECTS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%'}} className='text'>
                    <span className='cv-caption-text'><a className='link' href="https://www.ici-berlin.org/events/in-front-of-the-factory/" rel="noopener noreferrer" target="_blank" >In Front of the Factory</a> Collaborative Project</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin | Berlin, Germany | 2016 - 2018</span>
                        <span className='cv-caption-text'>Industrial Heritage Walking Tour </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}><a className='link' href="https://www.artidea.org/" rel="noopener noreferrer" target="_blank">International Festival of Arts and Ideas</a> | New Haven, CT | June 2018</span>
                        <span className='cv-caption-text'><a className='link' href='https://www.stlawu.edu/content/multitudes-art-exhibition-age-muslimban' rel="noopener noreferrer" target='_blank'>Multitudes: An Art Exhibit in the Age of the #muslimban</a></span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>St. Lawrence University | Canton, NY | Fall 2017</span>
                        <span className='cv-caption-text'>10 Mosques Bus Tour</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> Detroit, MI | Summer 2012</span>
                    </Grid.Column>
                    <Grid.Column style={{ width: '100%' }}><Divider /></Grid.Column>


                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        FELLOWSHIPS + GRANTS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%' }} className='text'>
                        <span className='cv-caption-text'>Public Voices Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Yale University | New Haven, CT | 2018-2019</span>
                        <span className='cv-caption-text'>Irmgard Coninx Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>ICI Berlin/Forum Transregionale Studien | Berlin, Germany | 2015-2016</span>
                        <span className='cv-caption-text'>Dean's Normative Time Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley | Berkeley, CA | 2013-2014</span>
                        <span className='cv-caption-text'>Ford Fellowship </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>Benson Ford Research Center | Dearborn, MI | 2012-2013</span>
                        <span className='cv-caption-text'>Foreign Language Area Studies Scholarship in Arabic (FLAS) </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>UC - Berkeley | Berkeley, CA | 2008-2009</span>
                        <span className='cv-caption-text'>Aga Khan Trust for Culture Grant </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>MIT | Cambridge, MA | Summer 2006</span>
                        <span className='cv-caption-text'>Doris Duke Foundation Research Grant </span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}>2006-2007</span>
                        <span className='cv-caption-text'>AIA Research Fellowship</span>
                        <span className='cv-subheader' style={{paddingBottom: '10px'}}> American Institute of Architects (Academy of Neuroscience for Architecture) | Washington, DC | 2004-2005</span>
                    </Grid.Column>
                    
                </Grid>
            </div>
        )
    }
}
