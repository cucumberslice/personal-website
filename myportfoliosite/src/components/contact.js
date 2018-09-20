import React, { Component } from 'react'
import {Grid,Cell, List, ListItem, ListItemContent} from 'react-mdl'
// import Yeshi from './yeshi'



class Contact extends Component {
    render() {
        return <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Yeshi Wangdi</h2>
                <img src="https://previews.123rf.com/images/marish/marish1801/marish180100014/93241128-cute-cat-illustration-icon-avatar.jpg" alt="avatar" style={{ height: "250px" }} />
                <p
                  style={{
                    width: "75%",
                    margin: "auto",
                    paddingTop: "1em"
                  }}
                >
                 {/* <Yeshi /> // typed js is not working at the moment*/}
                    "I'm a full stack developer.",
                    "I'm a traveler.",
                    "I'm gymn enthusiast.",
                    "I'm a lover of japanese izakaya.",
                    "I'm a dabbling drone pilot.",
                    "I'm a coffee connoisseur... self-proclaimed.",
                    "I'm a life-long learner.",
                </p>
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr />
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{ fontSize: "20px", fontFamily: "Anton" }}>
                        <i className="fa fa-phone-square" aria-hidden="true" />
                        (347) 322-1804
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{ fontSize: "20px", fontFamily: "Anton" }}>
                        <i className="fa fa-envelope" aria-hidden="true" />
                        wangdzi.yeshi@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{ fontSize: "20px", fontFamily: "Anton" }}>
                        <i className="fa fa-instagram" aria-hidden="true" />
                        cucumber_slice
                      </ListItemContent>
                    </ListItem>
                  </List>
                </div>
              </Cell>
            </Grid>
          </div>;
    }
}

export default Contact