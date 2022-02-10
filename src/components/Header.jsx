import React, { Component } from 'react';
import store from '../store';

export default class Header extends Component {
  componentDidMount() {
    this.walletInfo();
  }

    getEmail = () => {
      const storeState = store.getState();
      return (storeState.user.email);
    }

    walletInfo = () => {
      const { expenses } = store.getState().wallet;
      const { currencies } = store.getState().wallet;
      return { expenses, currencies };
    }

    render() {
      return (
        <header>
          <h4
            data-testid="email-field"
          >
            {this.getEmail()}

          </h4>

          <p>
            {this.walletInfo.currencies}
            {this.walletInfo.expenses}
          </p>
        </header>
      );
    }
}
