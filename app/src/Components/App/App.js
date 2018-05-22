import React, {Component} from 'react';
import CustomHelmet from '../Helmet/Helmet';
import PresentationQui from '../PresentationQui/PresentationQui';
import PresentationQuoi from '../PresentationQuoi/PresentationQuoi';
import Devis from '../Devis/Devis';
import Footer from '../Footer/Footer';
import metadata from '../../metadata/metadata.json';
import { Parallax } from 'react-spring';
import stars from '../../assets/stars-2.jpg';
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

                <CustomHelmet
                    name={metadata.name}
                    description={metadata.description}
                    url={metadata.url}
                />

                <Parallax.Layer offset={0} speed={0} factor={3.1} style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }} />

                <Parallax.Layer offset={0.1} factor={0.8} speed={0.1}
                                style={{ backgroundColor: '#252839', opacity: '0.9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PresentationQui />
                </Parallax.Layer>

                <Parallax.Layer offset={1.1} factor={0.8} speed={0.1}
                                style={{ backgroundColor: '#677077', opacity: '0.9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <PresentationQuoi />
                </Parallax.Layer>

                <Parallax.Layer offset={2.1} factor={0.8} speed={0} style={{ backgroundColor: '#b5b5b7', opacity: '0.9' }}>
                    <Devis />
                </Parallax.Layer>

                <Parallax.Layer offset={3} factor={0.1} speed={0} style={{ backgroundColor: '#000000' }}>
                    <Footer />
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
