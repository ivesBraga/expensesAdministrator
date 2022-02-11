// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_INFOS, REQUEST_CURRENCY } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_INFOS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.expenses,
      ],
    };
  case REQUEST_CURRENCY:
    return {
      ...state,
      currencies: action.api,
    };
  default:
    return state;
  }
}
