import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import createStore from '../../store';

import AddTrade from '../AddTrade';
import ViewTrades from '../ViewTrades';

class App extends Component {
    constructor(props) {
        super(props);
        this.setView = this.setView.bind(this);
        const { trades = [] } = this.props;

        this.state = {
            activeView: 'viewTrades',
        };

        this.store = createStore({
            trades,
        });
    }

    setView(activeView) {
        this.setState({ activeView });
    }

    render() {
        const { activeView } = this.state;
        return (
            <Provider store={this.store}>
                <div>
                    <h1>JP Morgan Tech test</h1>
                    <nav>
                        <button onClick={() => this.setView('viewTrades')}>
                            View trades
                        </button>
                        <button onClick={() => this.setView('addTrade')}>
                            Add trade
                        </button>
                    </nav>
                    {activeView === 'viewTrades' && <ViewTrades />}
                    {activeView === 'addTrade' && (
                        <AddTrade
                          handleBack={() => {
                                this.setView('viewTrades');
                            }}
                        />
                    )}
                </div>
            </Provider>
        );
    }
}


App.propTypes = {
    trades: PropTypes.array.isRequired,
};

export default App;
