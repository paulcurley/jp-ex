import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getAllTrades } from '../../states/trades/selectors';

const mapState = state => ({
    trades: getAllTrades(state),
});

export const ViewTrades = ({ trades = [] }) => {
    if (!trades.length) return <p>No Trades to view</p>;
    return (
        <table>
            <thead>
                <tr>
                    <th>Stock Symbol</th>
                    <th>Price</th>
                    <th>Number of Shares </th>
                </tr>
            </thead>
            <tbody>
                {trades.map(({ stockSymbol, price, noOfShares }, i) => (
                    <tr key={i}>
                        <td>{stockSymbol}</td>
                        <td>{price}</td>
                        <td>{noOfShares}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

ViewTrades.propTypes = {
    trades: PropTypes.array.isRequired,
};

export default connect(mapState)(ViewTrades);
