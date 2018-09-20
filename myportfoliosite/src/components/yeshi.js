import React, { Component } from 'react';
import { Container} from 'semantic-ui-react';
import Typed from 'typed.js';

class Yeshi extends Component {
    componentDidMount() {
        const options = {
            strings: [
                "I'm a^400 full stack developer.",
                "I'm a^400 world traveler.",
                "I'm a^400n amateur photographer.",
                "I'm a^400 lover of tacos.",
                "I'm a^400 dabbling drone pilot.",
                "I'm a^400 coffee connoisseur.^1200.. self-proclaimed.",
                "I'm a^400 life-long learner.",
            ],
            smartBackspace: true,
            typeSpeed: 45,
            backSpeed: 25,
            backDelay: 1000,
            loop: true,
            loopCount: Infinity,
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <Container className="landing-text">
                <h1 className="hey-text">Hey, I'm Dave.</h1>
                <div className="type-wrap">
                    <h1>
                        <span
                            style={{ whiteSpace: 'pre' }}
                            ref={el => {
                                this.el = el;
                            }}
                        />
                    </h1>
                </div>
            </Container>
        );
    }
}
export default Yeshi;