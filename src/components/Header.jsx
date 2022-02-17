import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      expense: 0,
    };
  }

  componentDidUpdate(prevProps) {
    const { expenses } = this.props;
    const { expense } = this.state;
    if (prevProps.expenses !== expenses) {
      expenses.map((moeda) => {
        const { value, currency } = moeda;
        const currencyExchange = moeda.exchangeRates[currency].ask;
        const exchangeCalc = currencyExchange * value;
        return (this.setState({ expense: expense + exchangeCalc }));
      });
    }
  }

  render() {
    const { email, expenses } = this.props;
    const { expense } = this.state;
    console.log(expenses);
    return (
      <header>
        <h4 data-testid="email-field">
          {email}
        </h4>
        <h4 data-testid="total-field">
          {Number(expense).toFixed(2)}
        </h4>
        <h4 data-testid="header-currency-field">
          BRL
        </h4>
      </header>
    );
  }
}

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => (
  { email: state.user.email,
    expenses: state.wallet.expenses }
);

export default connect(mapStateToProps)(Header);
