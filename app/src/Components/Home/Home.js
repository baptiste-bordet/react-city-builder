import React, {Component} from 'react';
import PresentationQui from '../PresentationQui/PresentationQui';
import PresentationQuoi from '../PresentationQuoi/PresentationQuoi';
import Devis from '../Devis/Devis';
import Footer from '../Footer/Footer';
import { Parallax } from 'react-spring';
import stars from '../../assets/stars-2.jpg';
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scrollLock: false,
            autoScrollEnable: false
        };

        this.goToPage = this.goToPage.bind(this);
        this.scrollEvent = this.scrollEvent.bind(this);
    }

    scrollEvent(event, currentPage) {

        if (this.state.autoScrollEnable && !this.state.scrollLock) {
            this.setState({scrollLock: true});

            console.log('currentPage ' + currentPage);

            if ((event.nativeEvent.detail > 0 || event.nativeEvent.wheelDelta < 0) && currentPage < 2) {
                // Down
                this.goToPage(currentPage + 1);
            } else if (currentPage > 0) {
                // Up
                this.goToPage(currentPage - 1);
            }
        }
    }

    goToPage(page) {
        console.log('scroll to ' + page);
        this.parallax.scrollTo(page);
        // this.setState({scrollLock: false});
        setTimeout(function() {
            this.setState({scrollLock: false});
        }.bind(this), 800);
    }

    render() {
        return (
            <Parallax ref={ref => (this.parallax = ref)} pages={3.1} scrolling={true}>

                <Parallax.Layer offset={0} speed={0} factor={3.1} style={{ backgroundImage: `url(${stars})`, backgroundSize: 'cover' }} />

                <Parallax.Layer offset={0.1} factor={0.8} speed={0.1}
                                style={{ backgroundColor: '#252839', opacity: '0.95', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                onWheel = {(e) => this.scrollEvent(e, 0)}>
                    <PresentationQui />
                </Parallax.Layer>

                <Parallax.Layer offset={1.1} factor={0.8} speed={0.1}
                                style={{ backgroundColor: '#677077', opacity: '0.95', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                onWheel = {(e) => this.scrollEvent(e, 1)}>
                    <PresentationQuoi />
                </Parallax.Layer>

                <Parallax.Layer offset={2.1} factor={0.8} speed={0.1} style={{ backgroundColor: '#b5b5b7', opacity: '0.95' }}
                                onWheel = {(e) => this.scrollEvent(e, 2)}>
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

export default Home;
