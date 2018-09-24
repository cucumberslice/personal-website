import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        }


         
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return <div className="projects-grid">
                {/*Project 1*/}
                <div className="cards1">
                  <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle
                      style={{
                        color: "#fff",
                        height: "176px",
                        background:
                          "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"
                      }}
                    >
                      GraceShopper (Team Project)
                    </CardTitle>
                    <CardText>
                      An E-commerce site where a user can post and
                      sell cars - Developed with NERD stack using
                      Node, Express, React, Sequelize - Styled with
                      Material UI CSS - Implemented Stripe payment
                      and OAuth log-ins
                    </CardText>
                    <CardActions border>
                      <Button colored>
                        <a className="dark-text" href="https://github.com/fantastic-four1337/grace_shopper" target="_blank" rel="noopener noreferrer">
                          GITHUB
                        </a>
                      </Button>
                      <Button colored disabled>
                        LiveDemo
                      </Button>
                      <Button colored>
                        <a className="dark-text" href="http://car-gurus.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                          Heruko
                        </a>
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                </div>

                {/*Project 2*/}
                <div className="cards1">
                  <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle
                      style={{
                        color: "#fff",
                        height: "176px",
                        background:
                          "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"
                      }}
                    >
                      AR Image Recognition
                    </CardTitle>
                    <CardText>
                      Augmented Reality with viro react-native -
                      Developed using Viromedia platform - Added 3D
                      models to the scene by converting into vrx -
                      Rendered 3D objects on the phone
                    </CardText>
                    <CardActions border>
                      <Button colored>
                        <a className="dark-text" href="https://github.com/cucumberslice/augmentedReality-1" target="_blank" rel="noopener noreferrer">
                          GITHUB
                        </a>
                      </Button>
                      <Button colored>
                        <a className="dark-text" href="https://www.youtube.com/watch?v=lCavRm7zoHc" target="_blank" rel="noopener noreferrer">
                          LiveDemo
                        </a>
                      </Button>
                      <Button colored disabled>
                        HEROKU
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                </div>

                {/*Project 3*/}
              <div className="cards1">
                  <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                    <CardTitle
                      style={{
                        color: "#fff",
                        height: "176px",
                        background:
                          "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover"
                      }}
                    >
                      WaitQR (Team Project)
                    </CardTitle>
                    <CardText>
                      A Waiting App for busy people in New York -
                      Implemented CRUD - Added geolocation with
                      google map api - Added video and text chat
                      using sockets and twilio api
                    </CardText>
                    <CardActions border>
                      <Button colored>
                        <a className="dark-text" href="https://github.com/cucumberslice/capstone" target="_blank" rel="noopener noreferrer">
                          GITHUB
                        </a>
                      </Button>
                      <Button colored>
                        <a className="dark-text" href="https://www.youtube.com/watch?v=ze5afn9wFkI" target="_blank" rel="noopener noreferrer">
                          LiveDemo
                        </a>
                      </Button>
                      <Button colored>
                        <a className="dark-text" href="http://waitrq.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                          HEROKU
                        </a>
                      </Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>
                </div>
              </div>;
        }
        else if(this.state.activeTab === 1){
            return (
            <div><h1>this is NodeJS</h1></div>
            )
        } 
        else if(this.state.activeTab === 2){
            return (
            <div><h1>this is Express</h1></div>
            )
        }
        else if(this.state.activeTab === 3){
            return (
            <div><h1>this is Postgres SQL</h1></div>
            )
        }
    }

    

    render() {
        return (
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>PENDGING</Tab>
                    <Tab>PENDING</Tab>
                    <Tab>PENDING</Tab>
                </Tabs>

                <section className='projects-grid'>
                   <Grid>
                       <Cell col={12}>
                        <div className='content'> {this.toggleCategories()}</div>
                       </Cell>
                   </Grid>
                </section>
            </div>
        )
    }
}

export default Project