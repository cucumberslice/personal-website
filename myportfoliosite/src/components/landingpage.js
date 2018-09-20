import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl'

class LandingPage extends Component {
    render() {
        return <div style={{ width: "100", margin: "auto" }}>
            <Grid className="landing-grid">
              <Cell col={12}>
                    <img src='img_6626_1.png' alt="avatar" className="avatar-img" />
                <div className="banner-text">
                  <h1>Full Stack Web Developer</h1>

                  <hr />

                  <p>
                    HTML/CSS | Boostrap | Javascript | React | React
                    Native | NodeJS | Express | Postgres SQL
                  </p>

                  <div className="social-links">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/yeshi-wangdi/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                        <a href="https://github.com/cucumberslice" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Freecodecamp */}
                            <a href="https://www.freecodecamp.org/cucumberslice" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-free-code-camp" aria-hidden="true" />
                    </a>

                    {/* Instagram  */}
                            <a href="https://www.instagram.com/cucumber_slice/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </Cell>
            </Grid>
          </div>;
    }
}

export default LandingPage