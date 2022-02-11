import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchCurrency, walletInfos } from '../actions';
// import walletAPI from '../services/walletAPI';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: '',
    };
  }

  componentDidMount() {
    const { saveCurrency } = this.props;
    saveCurrency();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  buttonClick = async () => {
    const { id } = this.state;
    this.setState({ id: id + 1 });
    const { dispatch, saveCurrency } = this.props;
    dispatch(walletInfos(this.state));
    await saveCurrency();
  }

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;
    const { currencies } = this.props;
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
              type="number"
              id="value-input"
              name="value"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description-input">
            Descrição da despesa
            <input
              data-testid="description-input"
              id="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency-input">
            Moeda utilizada
            <select
              data-testid="currency-input"
              id="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              <option>USD</option>
              {/* {
                Object.keys(currencies).map((quote) => (
                  <option key={ quote }>{quote}</option>
                ))
              } */}
            </select>
          </label>
          <label htmlFor="method-input">
            Método de pagamento
            <select
              data-testid="method-input"
              id="method-input"
              name="method"
              value={ method }
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
              name="tag"
              value={ tag }
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
  saveCurrency: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(fetchCurrency()),
});

export default connect(null, mapDispatchToProps)(Wallet);
