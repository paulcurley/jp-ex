import { ADD_TRADE } from './actions';

const defaultState = [];

const reducer = (state = defaultState, action) => {
    switch (action.type) {
    case ADD_TRADE:
        return [
            {
                timestamp: Date.now(),
                ...action.trade,
            },
            ...state,
        ];
    default:
        return state;
    }
};

export default reducer;
