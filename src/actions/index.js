import walletAPI from '../services/walletAPI';

// Coloque aqui suas actions
export const LOGIN_SAVE = 'LOGIN_SAVE';
export const WALLET_INFOS = 'WALLET_INFOS';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';

export const loginSave = (email) => ({ type: LOGIN_SAVE, email });

export const walletInfos = (expenses) => ({ type: WALLET_INFOS, expenses });

export const requestCurrency = (currencies) => ({ type: REQUEST_CURRENCY, currencies });

export const fetchCurrency = async (dispatch) => {
  try {
    const apiDoc = await walletAPI();
    delete apiDoc.USDT;
    return dispatch(requestCurrency(apiDoc));
  } catch (error) {
    console.error(error.message);
  }
};
