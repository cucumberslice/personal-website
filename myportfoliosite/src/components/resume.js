import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skill from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img 
                                src='https://previews.123rf.com/images/marish/marish1801/marish180100014/93241128-cute-cat-illustration-icon-avatar.jpg'
                                alt='avatar'
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Yeshi Wangdi</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>6011 39ave, 11377</p>
                        <h5>Phone</h5>
                        <p>(347)-322-1804</p>
                        <h5>Email</h5>
                        <p>wangdzi.yeshi@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p> 
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell col={8} className='resume-right-col'>
                        
                        <h2>Education</h2>
                        <Education 
                        startYear={2009} 
                        endYear={2012}
                        schoolName={'Mae Fah Luang University'}
                        schoolDiscription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, `}
                        
                        />

                        <Education 
                        startYear={2009} 
                        endYear={2012}
                        schoolName={'Mae Fah Luang University'}
                        schoolDiscription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, `}
                        
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience 
                            startYear={2012}
                            endYear={2014}
                            jobName={'Bartender'}
                            jobDescription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, `}
                        />

                          <Experience 
                            startYear={2012}
                            endYear={2014}
                            jobName={'Bartender'}
                            jobDescription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, `}
                        />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skill 
                            skill={'Javascript'}
                            progress={65}
                        />
                         <Skill 
                            skill={'React'}
                            progress={50}
                        />
                        <Skill 
                            skill={'NodeJS'}
                            progress={50}
                        />
                        <Skill 
                            skill={'Express'}
                            progress={50}
                        />
                        <Skill 
                            skill={'HTML/CSS'}
                            progress={45}
                        />
                 
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume