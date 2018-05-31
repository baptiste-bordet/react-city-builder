import React, {Component} from 'react';
import Infos from '../Infos/Infos';
import Technos from '../Technos/Technos';
import { Parallax } from 'react-spring';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.goToPage = this.goToPage.bind(this);
    }

    goToPage(page) {
        this.parallax.scrollTo(page);
    }

    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3.1} scrolling={true}>

                <Parallax.Layer offset={0.1} factor={0.8} speed={0.1}
                                style={{ backgroundColor: '#252839', opacity: '0.95', display: 'flex' }}>
                    <Infos />
                </Parallax.Layer>

                <Parallax.Layer offset={1.1} factor={0.8} speed={0.1}
                                style={{ backgroundColor: '#677077', opacity: '0.95', display: 'flex' }}>
                    <Technos />
                </Parallax.Layer>

                <Parallax.Layer offset={0.6} speed={0.2}>
                    <div className="goToWrapper">
                        <div className="goToButton" onClick={() => {
                            this.goToPage(0);
                        }}><span>Qui ?</span></div>

                        <div className="goToButton" onClick={() => {
                            this.goToPage(1);
                        }}><span>Quoi ?</span></div>

                        <div className="goToButton" onClick={() => {
                            this.goToPage(2);
                        }}><span>Devis</span></div>
                    </div>
                </Parallax.Layer>

            </Parallax>
        );
    }
}

export default App;
