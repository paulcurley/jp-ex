import React from 'react';
import { shallow } from 'enzyme';
import { AddTradeForm } from '.';

const setup = (setupProps = {}) => {
    const props = {
        handleBack: jest.fn(),
        handleAddTrade: jest.fn(),
        ...setupProps,
    };

    const wrapper = shallow(<AddTradeForm {...props} />);

    return {
        props,
        wrapper,
    };
};
describe('Add Trade', () => {
    it('renders', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
