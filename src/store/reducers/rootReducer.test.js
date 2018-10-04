import rootReducer from './rootReducer';

describe('Root Reducer', () => {
    it('returns state', () => {
        const intialState = rootReducer({}, {});
        const nextState = rootReducer(intialState, {});
        expect(nextState).toEqual(intialState);
    });
});
