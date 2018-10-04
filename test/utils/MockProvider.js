import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import createMockStore from './createMockStore';

const MockProvider = ({ children }) => (
    <Provider store={createMockStore()}>{children}</Provider>
);

MockProvider.propTypes = {
    children: PropTypes.node
};

export default MockProvider;
