/* eslint-disable no-underscore-dangle */

import { createStore } from 'redux';
import reducers from './reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : v => v;

export default initialState => createStore(reducers, initialState, devTools);
