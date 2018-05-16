import React, {Component} from 'react';
import CustomHelmet from '../Helmet/Helmet';
import PresentationQui from '../PresentationQui/PresentationQui';
import PresentationQuoi from '../PresentationQuoi/PresentationQuoi';
import Devis from '../Devis/Devis';
import Footer from '../Footer/Footer';
import metadata from '../../metadata/metadata.json';
import { Parallax } from 'react-spring';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headerOffset: 0.8
        };
        this.goToPage = this.goToPage.bind(this);
    }

    goToPage(page) {
        this.setState({headerOffset: page + 0.8})
    }

    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3} scrolling={true}>

                <CustomHelmet
                    name={metadata.name}
                    description={metadata.description}
                    url={metadata.url}
                />

                <Parallax.Layer offset={0} factor={1} speed={0}
                                style={{ backgroundColor: '#252839', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PresentationQui />
                </Parallax.Layer>

                <Parallax.Layer offset={1} factor={1} speed={0}
                                style={{ backgroundColor: '#677077', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PresentationQuoi />
                </Parallax.Layer>

                <Parallax.Layer offset={2} factor={1} speed={0}
                                style={{ backgroundColor: '#b5b5b7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Devis />
                </Parallax.Layer>

                <Parallax.Layer offset={2.8} factor={0.2} speed={-0}
                                style={{ backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Footer />
                </Parallax.Layer>

                <Parallax.Layer offset={this.state.headerOffset} speed={-1}>
                    <div className="goToWrapper">
                        <div className="goToButton" onClick={() => {
                            this.parallax.scrollTo(0);
                            this.goToPage(0);
                        }}><span>Qui ?</span></div>

                        <div className="goToButton" onClick={() => {
                            this.parallax.scrollTo(1);
                            this.goToPage(1);
                        }}><span>Quoi ?</span></div>

                        <div className="goToButton" onClick={() => {
                            this.parallax.scrollTo(2);
                            this.goToPage(2);
                        }}><span>Devis</span></div>
                    </div>
                </Parallax.Layer>

            </Parallax>

        );
    }
}

export default App;
