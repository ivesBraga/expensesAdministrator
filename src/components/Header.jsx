import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  // walletInfo = () => {
  //   const { expenses } = store.getState().wallet;
  //   const { currencies } = store.getState().wallet;
  //   return { expenses, currencies };
  // }

  render() {
    const { email } = this.props;
    return (
      <header>
        <h4
          data-testid="email-field"
        >
          {email}
        </h4>
        <h4 data-testid="total-field">
          0
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
};

const mapStateToProps = (state) => (
  { email: state.user.email }
);

export default connect(mapStateToProps)(Header);
