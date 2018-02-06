import React, {Component} from 'react';
import './Header.css';
import banner from '../../assets/banner.jpg';


class Header extends Component {


    render() {

        return (
            <div class="header row">
                <img src={banner} alt="banniere" />
            </div>
        );

    }
}

export default Header;
