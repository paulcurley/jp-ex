import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MockProvider from '../../../test/utils/MockProvider';

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MockProvider>
                <App trades={[]} />
            </MockProvider>,
            div,
        );
        ReactDOM.unmountComponentAtNode(div);
    });
});
