import { getAllTrades } from './selectors';

describe('trade Selector', () => {
    const state = {
        trades: [
            {
                stockSymbol: 'ALC',
                price: 43543,
                noOfShares: 543,
                timestamp: +new Date(),
            },
            {
                stockSymbol: 'VLC',
                price: 888,
                noOfShares: 342,
                timestamp: +new Date(),
            },
        ],
    };
    it('getAllTrades', () => {
        expect(getAllTrades(state)).toMatchSnapshot();
    });
});
