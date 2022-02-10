// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_INFOS } from '../actions';

const INITIAL_STATE = {
  currencies: 0,
  expenses: 0,
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFOS:
    return {
      ...state,
      currencies: action.currencies,
      expenses: action.expenses,
    };
  default:
    return state;
  }
}
