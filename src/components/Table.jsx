import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bulma/css/bulma.min.css';
import propTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="table is-triped">
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {
          expenses.length > 0 && expenses.map(({
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates,
            id,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
              <td>{Number(value * exchangeRates[currency].ask).toFixed(2)}</td>
              <td>Real</td>
              <td>Editar/Excluir</td>
            </tr>
          ))
        }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: propTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Table);
