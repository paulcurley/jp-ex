import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTrade } from '../../states/trades/actions';

const mapDispatch = dispatch => ({
    handleAddTrade: trade => dispatch(addTrade(trade)),
});

export class AddTradeForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, key) {
        this.setState({ [key]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { handleBack, handleAddTrade } = this.props;
        handleAddTrade({ trade: this.state });
        handleBack();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Stock Symbol:
                    <input
                        type="text"
                        name="stockSymbol"
                        required
                        onChange={event => this.handleChange(event, 'stockSymbol')}
                    />
                </label>
                <label>
                    Price:
                    <input
                        type="number"
                        name="price"
                        required
                        onChange={event => this.handleChange(event, 'price')}
                    />
                </label>
                <label>
                    Number of shares:
                    <input
                        type="number"
                        name="noOfShares"
                        required
                        onChange={event => this.handleChange(event, 'noOfShares')}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

AddTradeForm.propTypes = {
    handleBack: PropTypes.func.isRequired,
    handleAddTrade: PropTypes.func.isRequired,
};

const AddTrade = connect(
    null,
    mapDispatch,
)(AddTradeForm);

export default AddTrade;
