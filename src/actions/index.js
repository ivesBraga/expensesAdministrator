// Coloque aqui suas actions
export const LOGIN_SAVE = 'LOGIN_SAVE';
export const WALLET_INFOS = 'WALLET_INFOS';

export const loginSave = (email) => ({ type: LOGIN_SAVE, email });
export const walletInfos = (expenses) => ({ type: WALLET_INFOS, expenses });
