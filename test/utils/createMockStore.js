import createStore from '../../src/store';

export default () => {
    const initialState = { trades: {} };

    return createStore(initialState);
};
