import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { ViewTrades } from '.';

const setup = (setupProps = {}) => {
    const props = {
        ...setupProps,
    };

    const wrapper = shallow(<ViewTrades {...props} />);

    return {
        props,
        wrapper,
    };
};
describe('View Trades', () => {
    it('render', () => {
        const wrapper = setup({
            trades: [
                {
                    stockSymbol: 'ALC',
                    price: 432,
                    noOfShares: 54,
                },
            ],
        });
        expect(wrapper).toMatchSnapshot();
    });
});
