import React from 'react';
import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('App', () => {

    beforeEach(() => {

        global.fetch = jest.fn().mockImplementation(() => {
            var fetchPromise = new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    Id: '123',
                    json: function() {
                        return {test: 'world'}
                    }
                });
            });

            return fetchPromise;
        });

    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('Should inject Menu component', () => {
        const app  = shallow(<App/>);
        expect(app.find('Menu')).toHaveLength(1);
    });

});
