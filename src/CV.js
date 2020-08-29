import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

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
                        <span className='cv-subheader'> New Haven, CT | 2016-2019</span>
                        <br />
                        <span>Managed cultural heritage preservation projects between the fields of computer science and architecture. Oversaw a team of
                            computer science students and researchers to develop <i>Anqa</i>, an open access cultural heritage platform that documented six sites in Damascus, Syria. 
                            Spearheaded workshops, research, design, and wireframing, with an emphasis on empathy and storytelling from the ground up. To learn more, click
                            <a href='/projects/anqa'> here.</a></span>
                        <br />
                        <br />
                        <span className='cv-header'>Curator</span>
                        <br />
                            Richard F. Brush Gallery, St. Lawrence University <br />
                        <span className='cv-subheader'> Canton, NY | Fall 2017</span>
                        <br />
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
                        <span className='cv-subheader'> Oakland, CA | 2014</span>
                        <br />
                        <span> Conducted research based on design thinking for <a href='https://www.cell-ed.com/' rel="noopener noreferrer" target='_blank'>Cell-ED</a>, an English-as-a-Second-Language (ESL) educational 
                            startup for adults. Wrote briefs and <a href='https://gobeefellows.wordpress.com/2014/08/04/an-education/' rel="noopener noreferrer" target='_blank'>literacy analyses </a> 
                            that focused on improving access to English learning for adults in upstate New York, and assisted in improving pedagogical design.</span>


                    </Grid.Column>

                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        EDUCATION
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%' }} className='text'>
                        <span className='cv-header'>University of California - Berkeley</span>
                        <br />
                            Doctor of Philosophy (Ph.D.), Department of Architecture
                        <span className='cv-subheader'> Designated Emphasis: Global Metropolitan Studies<br />
                             Dissertation: <i>Corporate Empire: Fordism and the Making of Immigrant Detroit</i></span>
                        <br />

                        <span className='cv-header'>Massachusetts Institute of Technology</span>
                        <br />
                            Master of Science (M.Sc.), Architecture
                        <span className='cv-subheader'>
                            Thesis: <i>Shangri La: Architecture as Collection</i></span>
                        <br />

                        <span className='cv-header'>University of Michigan - Ann Arbor</span>
                        <br />
                            Bachelor of Science (B.Sc.), Psychology, Bachelor of Arts (B.A.), Architecture
                        <br />
                    </Grid.Column>

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

                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        FELLOWSHIPS + AWARDS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                        <span className='cv-header'>Public Voices Fellowship</span>
                        <br />
                        <span className='cv-subheader'> Yale University | New Haven, CT | 2018-2019</span>
                        <br />
                        <span className='cv-header'>Irmgard Coninx Fellowship</span>
                        <br />
                        <span className='cv-subheader'>ICI Berlin/Forum Transregionale Studien | Berlin, Germany | 2015-2016</span>
                        <br />
                        <span className='cv-header'>AIA Research Fellowship</span>
                        <br />
                        <span className='cv-subheader'> American Institute of Architects (Academy of Neuroscience for Architecture) | Washington, DC | 2004-2005</span>
                    </Grid.Column>

                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        TEACHING + WORKSHOPS
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                        <span className='cv-header'>Invited Lectures</span><br />
                            Something here
                            <br />

                        <span className='cv-header'>Invited Workshops</span><br />
                            Something here
                            <br />

                        <span className='cv-header'>Workshops Organized</span><br />
                            Something here
                    </Grid.Column>

                    <Grid.Column style={{ width: '30%' }} className='cv-caption-text'>
                        OTHER
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%', textAlign: 'justify' }} className='text'>
                        <span className='cv-header'></span><br />

                    </Grid.Column>

                </Grid>
            </div>
        )
    }
}
