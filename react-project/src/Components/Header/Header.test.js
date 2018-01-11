import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });


describe('Header', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    });

    it('Should display logo and visu', () => {
        const header  = shallow(<Header/>);
        expect(header.find('.header-logo')).toHaveLength(1);
        expect(header.find('.header-visu')).toHaveLength(1);
    });

});
