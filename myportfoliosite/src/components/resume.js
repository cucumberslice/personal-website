import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skill from './skills'

class Resume extends Component {
    render() {
        return <div>
            <Grid>
              <Cell col={4}>
                <div style={{ textAlign: "center" }}>
                  <img src="img_5734_2.png" alt="avatar" style={{ height: "200px" }} />
                </div>

                <h2 style={{ paddingTop: "2em" }}>Yeshi Wangdi</h2>
                <h4 style={{ color: "grey" }}>Programmer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                  After spending a good couple of years in the
                  restaurant industry, I made the transition into the
                  world of web development after being inspired by a
                  software engineer while working at the bar. I've
                  recently graduated from Fullstack Academy of Code and
                  I am currently looking for a position as a full stack
                  developer. Coding to me is very challenging and
                  satisfying because it forces me to think in a way I've
                  never thought before.
                </p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>6011 39ave, 11377</p>
                <h5>Phone</h5>
                <p>(347)-322-1804</p>
                <h5>Email</h5>
                <p>wangdzi.yeshi@gmail.com</p>
                <h5>Web</h5>
                <p>mywebsite.com</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              </Cell>
              <Cell col={8} className="resume-right-col">
                <h2>Education</h2>
                <Education startYear={2018} endYear={2018} schoolName={"Fullstack Academy of Code (New York)"} schoolDiscription={`Trained in a 13-week immersive live course on the NERDS(Node, 
                                Express, React, Database using SQL) stack
                                `} />

                <Education startYear={2009} endYear={2012} schoolName={"Mae Fah Luang University (Thailand)"} schoolDiscription={`Bachelor's Degree, Computer Software Engineering
                        
                        `} />

                <hr style={{ borderTop: "3px solid #e22947" }} />

                <h2>Experience</h2>

                <Experience startYear={2014} endYear={2018} jobName={"Ippudo Westside/Head Server (New York)"} jobDescription={`
                    Studied extensive detail oriented professional service training,
                    Interacted with customers in a welcoming manner with menu selection and suggestions,
                    Trained new hires on guest service expectations and proper food technique,
                    Handled Adelo POS system efficiently with customer orders and payment `} />

                <Experience startYear={2013} endYear={2017} jobName={"Obao/Bartender (New York)"} jobDescription={`
                     Efficiently multitasked during high traffic hours,
Worked along with floor managers on improving guests' satisfaction, 
 Taken up the responsibility of opening and closing the restaurant `} />

                <hr style={{ borderTop: "3px solid #e22947" }} />

                <h2>Skills</h2>
                <Skill skill={"Javascript"} progress={65} />
                <Skill skill={"React"} progress={50} />
                <Skill skill={"NodeJS"} progress={50} />
                <Skill skill={"Express"} progress={50} />
                <Skill skill={"HTML/CSS"} progress={45} />
              </Cell>
            </Grid>
          </div>;
    }
}

export default Resume