import reducer from './reducer';
import { ADD_TRADE } from './actions';

Date.now = jest.fn(() => '11111111');
describe('trade Reducer', () => {
    it('ADD_TRADE should update mode', () => {
        const initialState = {};

        const action = {
            type: ADD_TRADE,
            trade: {
                stockSymbol: 'ALC',
                price: 43543,
                noOfShares: 543,
            },
        };

        const state = reducer(initialState, action);
        expect(state).toMatchSnapshot();
    });
});
