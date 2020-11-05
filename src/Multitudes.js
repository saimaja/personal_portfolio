import React, { Component } from 'react'
import { Grid, Divider, Embed } from 'semantic-ui-react'

export default class Multitudes extends Component {
    render() {
        return (
            
            <>
            <Grid style={{ paddingTop: '35px', paddingLeft: '70px', paddingRight: '70px' }} stackable columns={2}>

                <Grid.Column style={{ width: '67%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                    <div style={{ textAlign: 'right' }} className='cv-caption-text'><strong>MULTITUDES</strong></div>
                    <Divider></Divider>

                    <div style={{ textAlign: 'right' }}>
                    <i>A number of exhibitions since 9/11 have used art as a platform to counter discrimination and Islamophobia by humanizing Muslims and emphasizing their contributions to US society. 
                    Yet, even when cast in a positive light, the image of Muslims often remains oversimplified. Moreover, the full negative impact of actions such as the #muslimban in 2017 on a diversity of communities (including Sikhs and non-Muslim Arabs) remains unacknowledged.
                    Multitudes is an art exhibition that seeks to do something distinct by drawing attention to the complex nature of ethnic, religious, and racial identities. The title refers to the multiple and often contradictory dimensions of identity that are expressed by individuals and communities in the United States. 
                    The exhibition explores themes of solidarity and intersection within Muslim, black, brown, gender-based, refugee and immigrant communities and highlights the impossibility of defining any region, culture, or identity through a singular understanding.
                    <br />
                    <br />
                    The exhibition brings together seven artists and an artists’ collaborative from diverse Muslim and non-Muslim backgrounds, whose work challenges and transcends narrow representations of people from Muslim-majority countries. While such representations 
                    are often dominated by images of violence in today’s news and entertainment media, the work in this exhibition spans a range of media, including photography, printmaking, sculpture, and painting, to create cutting-edge and subversive commentaries on contemporary society that also relate to the artists’ 
                    own complex identities.</i>
                        <br />
                        <br />
                        <div style={{ textAlign: 'left' }}>
                </div>
                    </div>
                </Grid.Column>
                
      <Grid.Column style={{width: '60%', textAlign: 'justify'}} className='text'>

    <span className='text'>Profile: <a href="http://bit.ly/2C50CjG" rel="noopener noreferrer" target="_blank">Art as a way to resist negative images and Islamophobia</a></span>
    <span className='cv-subheader' style={{paddingBottom: '10px'}}>by Todd Moe | <i>NCPR</i>, Nov 1 2017</span>

    <span className='text'>Review: <a href="https://www.jstor.org/stable/10.2979/jims.1.2.10" rel="noopener noreferrer" target="_blank">Field of Vision: Homeland is Not a Series</a></span>
      <span className='cv-subheader' style={{paddingBottom: '10px'}}><i>Journal of Islamic and Muslim Studies</i> 1.2 (2016): 98-101.</span>
  
    </Grid.Column>

            </Grid>

            <Grid style={{ paddingLeft: '70px', paddingRight: '70px', backgroundColor: '#ececec' }} stackable columns={2}>
                <Grid.Column style={{ width: '67%' }}>

                    <Embed
                        id='455662095'
                        source='vimeo'
                    />
                </Grid.Column>
                
                <Grid.Column style={{ width: '33%', textAlign: 'justify', paddingLeft: '50px' }} className='text'>
                    <div style={{ textAlign: 'left' }}>
                        <a href='https://github.com/saimaja/trivia' rel="noopener noreferrer" className='button' target='_blank'>View Code</a>
                        <br />
                        <br />
                        <div style={{ fontWeight: '900' }}>
                + Built with Ruby on Rails and vanilla Javascript
                <br />
                + ActiveRecord for associations
                <br />
                + SQLite for data persistence
                <br />
                + Data seeded from an external Trivia API
                <br />
                + Styled with Semantic UI and custom CSS for a clean, easy-to-use gaming interface
                <br />
                <br />
                Collaborator: Mert Ozkaynak
                <br />
                Built: May 2020</div>
                    </div>
                    <br />
                </Grid.Column>

            </Grid>
        </>
           
        )
    }
}
