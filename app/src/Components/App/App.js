import React, {Component} from 'react';
import { connect } from 'react-redux';
import Flags from '../Flags/Flags';
import Header from '../Header/Header';
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

        const parallaxStyle = {
            opacity: '0.95',
            display: 'flex',
            width: '100%'
        };

        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3.1} scrolling={true}>

                <Flags />

                <Parallax.Layer offset={0.1} factor={0.1} speed={1}
                                style={{ backgroundColor: '#252839', parallaxStyle}}>
                    <Header />
                </Parallax.Layer>

                <Parallax.Layer className="parallax-info" offset={0.3} factor={0.4} speed={0.8}
                                style={{ backgroundColor: '#252839', opacity: '0.95', display: 'flex', width: '100%' }}>
                    <Infos />
                </Parallax.Layer>

                <Parallax.Layer offset={0.8} factor={0.8} speed={1}
                                style={{ backgroundColor: '#008291', opacity: '0.95', display: 'flex', width: '100%' }}>
                    <Technos />
                </Parallax.Layer>

                {/*<Parallax.Layer offset={0.6} speed={0.2}>
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
                </Parallax.Layer>*/}

            </Parallax>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, null)(App);