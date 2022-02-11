import walletAPI from '../services/walletAPI';

// Coloque aqui suas actions
export const LOGIN_SAVE = 'LOGIN_SAVE';
export const WALLET_INFOS = 'WALLET_INFOS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_START = 'FETCH_START';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

export const loginSave = (email) => ({ type: LOGIN_SAVE, email });

// export const walletInfos = (expenses) => ({ type: WALLET_INFOS, expenses });

export const fetchStart = () => ({ type: FETCH_START });

export const fetchSuccess = (states, exchangesRates) => ({
  type: FETCH_SUCCESS,
  states,
  exchangesRates,
});

export const fetchCurrencies = (currencies) => ({
  type: FETCH_CURRENCIES,
  currencies,
});

export const allExchanges = (states) => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const apiDoc = await walletAPI();
    return dispatch(fetchSuccess(states, apiDoc));
  } catch (error) {
    console.error(error.message);
  }
};

export const allCurrencies = () => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const apiDoc = await walletAPI();
    delete apiDoc.USDT;
    return dispatch(fetchCurrencies(apiDoc));
  } catch (error) {
    console.error(error.message);
  }
};
