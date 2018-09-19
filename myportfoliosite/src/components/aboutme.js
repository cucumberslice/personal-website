import React, { Component } from 'react'

class AboutMe extends Component {
    render() {
        return <div className="about-me">
            <h1>AboutMe</h1>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              I grew up in <a className="dark-text" href="https://en.wikipedia.org/wiki/Bhutan" target="_blank">
                Bhutan
              </a>, a small shangrila captivated by the beautiful himalayas and went to college in Thailand. After graduation, I moved to NYC and started working in the restaurants.
            </p>

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Working in the restaurant has been a life changing experience in a positive way and it provided me the platform to network and meet amazing friends. My title was a front of house staff, but I wore many hats given the size and stage of the business.
            </p>

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Having worked in the restaurant industry for almost five years, it was time for something new. I joined <a className="dark-text" href="https://www.fullstackacademy.com/software-engineering-immersive" target="_blank">
                Fullstack Academy
              </a>
              's Software Engineering Immersive Program to transition into a career in software development.
            </p>

            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              I graduted from Fullstack Academy on July 2018, and now I
              am actively looking for a position as a fullstack
              developer.
            </p>

            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em"
              }}
            >
              Away from computer, my interests include going to the
              gymn, travelling, snowboarding, reading self improvement
              books, enjoying long talks at different coffee shops and
              an ameature food connoisseur(self-proclaimed).
            </p>
          </div>;
    }
}

export default AboutMe