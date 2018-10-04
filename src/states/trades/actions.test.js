import { addTrade, ADD_TRADE } from './actions';

Date.now = jest.fn(() => '11111111');
describe('trade actions', () => {
    it('should create an ADD_TRADE action', () => {
        const action = addTrade({
            trade: {
                stockSymbol: 'ALC',
                price: 43543,
                noOfShares: 543,
            },
        });

        expect(action).toEqual({
            type: ADD_TRADE,
            trade: {
                stockSymbol: 'ALC',
                price: 43543,
                noOfShares: 543,
            },
        });
    });
});
