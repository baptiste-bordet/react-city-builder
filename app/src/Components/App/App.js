import React, {Component} from 'react';
import CustomHelmet from '../Helmet/Helmet';
import Header from '../Header/Header';
import PresentationQui from '../PresentationQui/PresentationQui';
import PresentationQuoi from '../PresentationQuoi/PresentationQuoi';
import Devis from '../Devis/Devis';
import Footer from '../Footer/Footer';
import metadata from '../../metadata/metadata.json';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">

                <CustomHelmet
                    name={metadata.name}
                    description={metadata.description}
                    url={metadata.url}
                />

                <Header />
                <PresentationQui />
                <PresentationQuoi />
                <Devis />
                <Footer />

            </div>
        );
    }
}

export default App;
