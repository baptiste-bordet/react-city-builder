import React, {Component} from 'react';
import { connect } from 'react-redux';
import Flags from '../Flags/Flags';
import Header from '../Header/Header';
import Infos from '../Infos/Infos';
import Technos from '../Technos/Technos';
import Hobbies from '../Hobbies/Hobbies';
import Experiences from '../Experiences/Experiences';
import Recommandations from '../Recommandations/Recommandations';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {

    render() {

        const className = `app-container ${this.props.data.class}`;

        return (
            <div className={className}>
                <Flags />
                <Header />
                <Infos />
                <div className="left-side">
                    <Technos />
                    <Hobbies />
                </div>
                <Experiences />
                <Recommandations />
                <Contact />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, null)(App);