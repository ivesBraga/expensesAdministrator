// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_INFOS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFOS:
    return {
      ...state,
      currencies: [...currencies, action.currencies],
    };
  default:
    return state;
  }
}
