import React, {Component} from 'react';
import CustomHelmet from '../Helmet/Helmet';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import User from '../User/User';
import metadata from '../../metadata/metadata.json';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>

                <CustomHelmet
                    name={metadata.name}
                    description={metadata.description}
                    url={metadata.url}
                />

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path="/user" component={User} />
                </Switch>

            </div>
        );
    }
}

export default App;
