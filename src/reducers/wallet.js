// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_SUCCESS, FETCH_CURRENCIES } from '../actions';

const INITIAL_STATE = {
  expenses: [],
  currencies: [],
};

export default function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_SUCCESS:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: action.states.id,
          value: action.states.value,
          description: action.states.description,
          currency: action.states.currency,
          method: action.states.method,
          tag: action.states.tag,
          exchangeRates: action.exchangesRates,
        },
      ],
    };
  case FETCH_CURRENCIES:
    return {
      ...state,
      currencies: action.currencies,
    };
  // case REQUEST_CURRENCY:
  //   return {
  //     ...state,
  //     currencies: action.api,
  //   };
  default:
    return state;
  }
}
