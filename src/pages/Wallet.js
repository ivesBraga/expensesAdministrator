import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { walletInfos } from '../actions';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      expenseValue: '',
      expenseDescriptions: '',
      currency: '',
      paymentMethod: '',
      expenseCategory: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  buttonClick = () => {
    const { dispatch } = this.props;
    dispatch(walletInfos(this.state));
  }

  render() {
    const {
      expenseValue,
      expenseDescriptions,
      currency,
      paymentMethod,
      expenseCategory,
    } = this.state;
    return (
      <div>
        <Header />
        <form>
          <label
            htmlFor="value-input"
          >
            Valor da despesa
            <input
              data-testid="value-input"
              id="value-input"
              name="expenseValue"
              value={ expenseValue }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição da despesa
            <input
              data-testid="description-input"
              id="description-input"
              name="expenseDescriptions"
              value={ expenseDescriptions }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency-input">
            Moeda utilizada
            <input
              data-testid="currency-input"
              id="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="method-input">
            Método de pagamento
            <select
              data-testid="method-input"
              id="method-input"
              name="paymentMethod"
              value={ paymentMethod }
              onChange={ this.handleChange }
            >
              <option>
                Dinheiro
              </option>
              <option>
                Cartão de crédito
              </option>
              <option>
                Cartão de débito
              </option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria da despesa
            <select
              data-testid="tag-input"
              id="tag-input"
              name="expenseCategory"
              value={ expenseCategory }
              onChange={ this.handleChange }
            >
              <option>
                Alimentação
              </option>
              <option>
                Lazer
              </option>
              <option>
                Trabalho
              </option>
              <option>
                Transporte
              </option>
              <option>
                Saúde
              </option>
            </select>
          </label>
          <button
            type="button"
            onClick={ this.buttonClick }
          >
            Adicionar despesa
          </button>
        </form>
      </div>);
  }
}

Wallet.propTypes = {
  dispatch: propTypes.string.isRequired,
};

export default connect()(Wallet);
